from tornado.test.options_test import Email
from utilities.db.db_manager import dbManager


class Contact:
    def __init__(self, Email=None, fullName=None, Telephone=None, Description=None):
        self.Email = Email
        self.fullName = fullName
        self.Telephone = Telephone
        self.Description = Description

    def info(self):
        dbManager.commit('''
        INSERT INTO contact_us (Email, fullName, Telephone, Description)
        VALUES (%s, %s, %s, %s)
        ''', (self.Email, self.fullName, self.Telephone, self.Description))

