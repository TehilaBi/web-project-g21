from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
# import mysql.connector


# about blueprint definition
recipes = Blueprint('recipes', __name__, static_folder='static', static_url_path='/Recipes', template_folder='templates')


@recipes.route('/Recipes')
def main_func():
    return render_template('Recipes.html')
