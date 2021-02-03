from utilities.db.db_manager import DBManager


class Product:
    def __init__(self, ID, name, category, price, picture, description):
        self.ID = ID
        self.name = name
        self.category = category
        self.price = price
        self.picture = picture
        self.description = description
