from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
# import mysql.connector


# about blueprint definition
workshops = Blueprint('workshops', __name__, static_folder='static', static_url_path='/workshops', template_folder='templates')


@workshops.route('/Workshops')
def main_func():
    return render_template('Workshops.html')
