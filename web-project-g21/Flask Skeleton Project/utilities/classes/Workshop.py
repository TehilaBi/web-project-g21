from utilities.db.db_manager import dbManager


class Workshop:
    def __init__(self, id, name, price, picture, description, max_number_participants, workshop_date):
        self.id = id
        self.name = name
        self.max_number_participants = max_number_participants
        self.price = price
        self.picture = picture
        self.description = description
        self.workshop_date = workshop_date


    def workshopprice(name):
        query = "SELECT Price FROM workshops where workshop_name = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def workshopdes(name):
        query = "SELECT description FROM workshops where workshop_name = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def workshoppic(name):
        query = "SELECT picture FROM workshops where workshop_name = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def workshopdate(name):
        query = "SELECT workshop_date FROM workshops where workshop_name = '%s';" % name
        query_result = dbManager.fetch(query)
        return query_result

    def workshopnamepic():
        query = "SELECT workshop_name,picture FROM workshops;"
        query_result = dbManager.fetch(query)
        return query_result

    def workshopname():
        query = "SELECT workshop_name FROM workshops;"
        query_result = dbManager.fetch(query)
        return query_result