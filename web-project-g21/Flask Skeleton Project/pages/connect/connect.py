from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.User import User


# about blueprint definition
connect = Blueprint('connect', __name__, static_folder='static', static_url_path='/connect', template_folder='templates')


@connect.route('/connect')
def index():
    return render_template('connect.html')

@connect.route('/sup', methods=['GET', 'POST'])
def main_func_sup():
    if request.method == 'POST':
        us = User()
        us.email = request.form['Emailup']
        us.firstName = request.form['FirstName']
        us.lastName = request.form['LastName']
        us.user_password = request.form['pwdup']
        if us.Exist():
            flash('Already in the system!')
            return redirect('/connect')
        else:
            us.info()
            flash('Welcome')
    return redirect('/connect')


# Routes
@connect.route('/sin', methods=['GET', 'POST'])
def main_func_sin():
    if request.method == 'POST':
        us = User()
        us.email = request.form['Emailin']
        us.user_password = request.form['pwdin']
        if us.Check():
            session['logged_in'] = True
            session['Email'] = us[0].email
            session['Password'] = us[0].user_password
            flash('You are in!')
        else:
            flash('email not in the system!')
    return redirect('/connect')

# Routes
@connect.route('/upd', methods=['GET', 'POST'])
def main_func_upd():
    if request.method == 'POST':
        us = User()
        us.email = request.form['Emailverify']
        us.user_password = request.form['pwdnew']
        us.upd_pass()
        flash("Password Changes!")
    else:
        redirect('/connect')
    return redirect('/connect')
