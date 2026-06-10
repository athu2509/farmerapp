import json
from uuid import UUID
from datetime import date, datetime

from fastapi.responses import JSONResponse


class AppJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, UUID):
            return str(obj)
        if isinstance(obj, (date, datetime)):
            return obj.isoformat()
        return super().default(obj)


def _serialize(data):
    return json.loads(json.dumps(data, cls=AppJSONEncoder))


def success_response(data=None, message="Success", status_code=200):
    body = {
        "status": "success",
        "message": message,
        "data": _serialize(data)
    }

    return JSONResponse(content=body, status_code=status_code)


def error_response(message="An error occurred", status_code=400):
    body = {
        "status": "error",
        "message": message,
        "data": None
    }

    return JSONResponse(content=body, status_code=status_code)
