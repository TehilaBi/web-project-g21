from flask import render_template
from utilities.db.db_manager import dbManager

class User:
    def __init__(self, email=None, firstName=None, lastName=None, user_password=None):
        self.email = email
        self.firstName = firstName
        self.lastName = lastName
        self.user_password = user_password

    def Exist(email):
        query = "SELECT email FROM users where email = '%s';" % email
        query_result = dbManager.fetch(query)
        return query_result

    def info(self):
            dbManager.commit('''
            INSERT INTO users (email, firstName, lastName, user_password)
            VALUES (%s, %s, %s, %s)
            ''', (self.email, self.firstName, self.lastName, self.user_password))


    def Check(email):
        query = "SELECT * FROM users where email = '%s';" % email
        query_result = dbManager.fetch(query)
        return query_result

    def upd_pass(self):
        query = "SELECT * FROM users where email = '%s';" % self.email
        query_result = dbManager.fetch(query)
        if query_result:
            dbManager.commit('UPDATE users SET user_password=%s where email=%s ', (self.user_password, self.email))

