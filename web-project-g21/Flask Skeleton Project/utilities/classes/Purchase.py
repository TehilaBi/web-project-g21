from utilities.db.db_manager import dbManager

class Purchases:
    def __init__(self, purchases_Id=None, purchases_date=None, product_id=None, workshop_id = None, Price=None):
        self.purchases_Id = purchases_Id
        self.purchases_date = purchases_date
        self.product_id = product_id
        self.workshop_id = workshop_id
        self.Price = Price

    def insertPurch(self):
        dbManager.commit('''
        INSERT INTO purchases (purchases_Id, purchases_date, product_id, workshop_id,  Price)
        VALUES (%s, %s, %s, %s, %s)
        ''', (self.purchases_Id, self.purchases_date, self.product_id, self.workshop_id, self.Price))


    def id(self):
        query = "select purchases_Id from purchases order by purchases_Id desc limit 1;"
        query_result = dbManager.fetch(query)
        index = 0
        for i in query_result:
            index = i.purchases_Id
        index = index+1
        return index


