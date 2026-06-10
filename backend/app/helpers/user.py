def user_to_dict(user):
    return {
        "id": str(user.id),
        "name": user.name,
        "email": user.email,
        "roles": user.roles
    }