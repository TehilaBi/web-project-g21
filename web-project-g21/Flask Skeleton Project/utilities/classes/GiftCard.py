from tornado.test.options_test import Email
from utilities.db.db_manager import dbManager

class Gift_Card:
    def __init__(self, gift_card_id=None, amount=None, ReceiverName=None, ReceiverEmail=None):
        self.gift_card_id = gift_card_id
        self.amount = amount
        self.ReceiverName = ReceiverName
        self.ReceiverEmail = ReceiverEmail

    def info(self):
        dbManager.commit('''
        INSERT INTO gift_cards (gift_card_Id, amount,  ReceiverName, ReceiverEmail)
        VALUES (%s, %s, %s, %s)
        ''', (self.gift_card_id, self.amount, self.ReceiverName, self.ReceiverEmail))

    def id(self):
        query = "select gift_card_Id from gift_cards order by gift_card_id desc limit 1;"
        query_result = dbManager.fetch(query)
        index = 0
        for i in query_result:
            index = i.gift_card_Id
        index = index+1
        return index

