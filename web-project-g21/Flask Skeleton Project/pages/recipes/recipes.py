from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Recipe import Recipe



# about blueprint definition
recipes = Blueprint('recipes', __name__, static_folder='static', static_url_path='/Recipes', template_folder='templates')


@recipes.route('/Recipes')
def main_func():
    namepic = Recipe.recipenamepic()
    names = Recipe.recipename()
    name_recip = []
    pic = []
    for name in namepic:
        name_recip.append(name.Recipe_name)
        pic.append('/images/' + name.Recipe_name + '.png')
        link = '../web-project-g21/Flask Skeleton Project/pages/recipes/static/images/' + name.Recipe_name + '.png'
        with open(link, 'wb') as f:
            f.write(name.Picture)
    name_pic = zip(name_recip, pic)
    return render_template('Recipes.html', namepic=name_pic, names=names)

