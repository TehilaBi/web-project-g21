from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector


# about blueprint definition
specific_recipe = Blueprint('specific_recipe', __name__, static_folder='static', static_url_path='/specificRecipe', template_folder='templates')


@specific_recipe.route('/specificRecipe')
def main_func():
    return render_template('specificRecipe.html')
