from utilities.db.db_manager import dbManager

class Product:
    def __init__(self, ID, name, category, price, picture, description):
        self.ID = ID
        self.name = name
        self.category = category
        self.price = price
        self.picture = picture
        self.description = description


    def productname(category):
        if(category=='all'):
            query = "select name_product,Picture from products;"
        else:
            query = "select name_product,Picture from products where Category='%s';" % category

        query_result = dbManager.fetch(query)
        return query_result

    def productnamedesc():
       query = "select name_product,Picture from products order by product_Id desc limit 4;"
       query_result = dbManager.fetch(query)
       return query_result

    def productnameasc():
       query = "select name_product,Picture from products order by product_Id asc limit 4;"
       query_result = dbManager.fetch(query)
       return query_result


    def productprice(name):
        query = "SELECT Price FROM products where name_product = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def productdes(name):
        query = "SELECT Description FROM products where name_product = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def productpic(name):
        query = "SELECT Picture FROM products where name_product = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def productid(name):
        query = "SELECT product_Id FROM products where name_product = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

