from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector


# about blueprint definition
connect = Blueprint('connect', __name__, static_folder='static', static_url_path='/connect', template_folder='templates')


@connect.route('/connect')
def main_func():
    return render_template('connect.html')
