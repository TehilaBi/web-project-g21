from utilities.db.db_manager import dbManager
import io

class Recipe:
    def __init__(self, id, name, picture, preparation_steps, diet, level_difficulty, Ingredient_list):
        self.id = id
        self.name = name
        self.picture = picture
        self.preparation_steps = preparation_steps
        self.diet = diet
        self.level_difficulty = level_difficulty
        self.Ingredient_list = Ingredient_list

    def recipenamepic():
         query = "select Recipe_name,Picture from recipes;"
         query_result = dbManager.fetch(query)
         return query_result

    def recipename():
         query = "select Recipe_name from recipes;"
         query_result = dbManager.fetch(query)
         return query_result

    def recipelevel(namerecipe):
         query = "select level_difficulty from recipes where Recipe_name = '%s';" % namerecipe
         query_result = dbManager.fetch(query)
         return query_result

    def repiceing(namerecipe):
         query = "select Ingredient_list from recipes where Recipe_name = '%s';" % namerecipe
         query_result = dbManager.fetch(query)
         return query_result

    def repiceinst(namerecipe):
         query = "select preparation_steps from recipes where Recipe_name = '%s';" % namerecipe
         query_result = dbManager.fetch(query)
         return query_result

    def recipepic(namerecipe):
        query = "select Picture from recipes where Recipe_name ='%s';" % namerecipe
        query_result = dbManager.fetch(query)
        return query_result





