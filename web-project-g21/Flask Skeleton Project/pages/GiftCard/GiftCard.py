from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
# import mysql.connector


# about blueprint definition
GiftCard = Blueprint('GiftCard', __name__, static_folder='static', static_url_path='/GiftCard', template_folder='templates')


@GiftCard.route('/GiftCard')
def main_func():
    return render_template('GiftCard.html')
