from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector


# about blueprint definition
contactMe = Blueprint('contactMe', __name__, static_folder='static', static_url_path='/contact me', template_folder='templates')


@contactMe.route('/contact me')
def main_func():
    return render_template('contact me.html')
