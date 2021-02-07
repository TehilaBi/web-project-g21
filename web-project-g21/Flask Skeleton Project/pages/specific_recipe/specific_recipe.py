from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Recipe import Recipe


# about blueprint definition
specific_recipe = Blueprint('specific_recipe', __name__, static_folder='static', static_url_path='/specificRecipe', template_folder='templates')


@specific_recipe.route('/Recipe/<name>')
def main_func(name):
    level = Recipe.recipelevel(name)
    ing = Recipe.repiceing(name)
    ins = Recipe.repiceinst(name)
    picture = Recipe.recipepic(name)
    instructions = ins.split('$')
    ingredients = ing.split('$')
    for pic in picture:
        picturelink = '/images/' + name + '.png'
        link = '../web-project-g21/Flask Skeleton Project/pages/specific_recipe/static/images/' + name + '.png'
        with open(link, 'wb') as f:
            f.write(pic.Picture)

    return render_template('specificRecipe.html', name=name, level=level, ingredients=ingredients, instructions=instructions, picture=picturelink)
