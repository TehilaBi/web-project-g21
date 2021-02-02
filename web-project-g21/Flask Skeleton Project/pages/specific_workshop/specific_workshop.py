from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector


# about blueprint definition
specific_workshop = Blueprint('specific_workshop', __name__, static_folder='static', static_url_path='/specificWorkshop', template_folder='templates')


@specific_workshop.route('/specificWorkshop')
def main_func():
    return render_template('specificWorkshop.html')
