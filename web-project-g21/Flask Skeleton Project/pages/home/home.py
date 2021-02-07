from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector


# about blueprint definition
home = Blueprint('home', __name__, static_folder='static', static_url_path='/', template_folder='templates')


@home.route('/')
def main_func():
    return render_template('home1.html')
