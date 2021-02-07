from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.GiftCard import Gift_Card


# about blueprint definition
GiftCard = Blueprint('GiftCard', __name__, static_folder='static', static_url_path='/GiftCard', template_folder='templates')


@GiftCard.route('/GiftCard')
def index():
    return render_template('GiftCard.html')

@GiftCard.route('/requestgc', methods=['GET', 'POST'])
def main_func():
    if request.method == 'POST':
        gc = Gift_Card()
        gc.gift_card_id = gc.id()
        gc.amount = request.form['amount']
        gc.ReceiverName = request.form['receiverName']
        gc.ReceiverEmail = request.form['receiverEmail']
        gc.info()
    return redirect('/GiftCard')

