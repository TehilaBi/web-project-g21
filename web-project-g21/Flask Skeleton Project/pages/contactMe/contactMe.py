from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Contact import Contact


# about blueprint definition
contactMe = Blueprint('contactMe', __name__, static_folder='static', static_url_path='/contact me', template_folder='templates')

@contactMe.route('/contact me')
def index():
    return render_template('contact-me.html')

@contactMe.route('/request', methods=['GET', 'POST'])
def main_func():
    if request.method == 'POST':
        ct = Contact()
        ct.fullName = request.form['fullName']
        ct.Email = request.form['Email']
        ct.Telephone = request.form['Phone']
        ct.Description = request.form['Comment']
        ct.info()
    return redirect('/contact me')





