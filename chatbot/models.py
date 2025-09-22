from database import Base

# All tables are now available in Base.classes
# Example: if you have a table named 'users' in your DB
User = Base.classes.User  # Match exact table name

