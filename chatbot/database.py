from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL, echo=True)
# Automap Base
metadata = MetaData()
Base = automap_base(metadata=metadata)
# Reflect existing database
metadata.reflect(bind=engine)
Base.prepare()
# Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Dependency for FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
