from functools import wraps

from fastapi import HTTPException, Request

from app.config.database import SessionLocal
from app.services import user as user_service
from app.util.jwt import decode_access_token


def require_roles(roles: list[str]=["USER"]):

    def decorator(func):

        @wraps(func)
        async def wrapper(*args, **kwargs):

            request = None

            for arg in args:
                if isinstance(arg, Request):
                    request = arg
                    break

            if request is None:
                request = kwargs.get("request")

            if request is None:
                raise HTTPException(
                    status_code=500,
                    detail="Request object not found"
                )

            authorization = request.headers.get(
                "Authorization"
            )

            if not authorization:
                raise HTTPException(
                    status_code=401,
                    detail="Token missing"
                )

            try:

                token = authorization.replace(
                    "Bearer ",
                    ""
                )

                payload = decode_access_token(
                    token
                )
               
                db = SessionLocal()

                try:

                    user = user_service.get_user_by_id(
                        db,
                        payload["user_id"]
                    )
                    if not user:
                        raise HTTPException(
                            status_code=401,
                            detail="User not found"
                        )

                    if user.is_deleted:
                        raise HTTPException(
                            status_code=401,
                            detail="User account is deactivated"
                        )


                    return await func(
                        *args,
                        **kwargs
                    )

                finally:
                    db.close()

            except HTTPException:
                raise

            except Exception as e:
              print("ERROR:", e)

              raise HTTPException(
              status_code=401,
              detail=str(e)
           )

        return wrapper

    return decorator