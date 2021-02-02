from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector


# about blueprint definition
about = Blueprint('about', __name__, static_folder='static', static_url_path='/about', template_folder='templates')


@about.route('/about')
def main_func():
    return render_template('about.html')
