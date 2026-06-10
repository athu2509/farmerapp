from sqlalchemy import text

from app.config.database import engine


def migrate():
    statements = [
        "ALTER TABLE farmers ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN NOT NULL DEFAULT FALSE",
        "ALTER TABLE farms ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN NOT NULL DEFAULT FALSE",
        "ALTER TABLE schedules ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN NOT NULL DEFAULT FALSE",
        "ALTER TABLE users ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN NOT NULL DEFAULT FALSE"
    ]

    with engine.connect() as conn:
        for statement in statements:
            conn.execute(text(statement))
        conn.commit()


if __name__ == "__main__":
    migrate()
    print("Migration completed")
