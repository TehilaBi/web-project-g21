from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
# import mysql.connector


# about blueprint definition
shop = Blueprint('shop', __name__, static_folder='static', static_url_path='/Shop', template_folder='templates')


@shop.route('/Shop')
def main_func():
    return render_template('Shop.html')
