from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Workshop import Workshop

# about blueprint definition
workshops = Blueprint('workshops', __name__, static_folder='static', static_url_path='/workshops', template_folder='templates')


@workshops.route('/Workshops')
def main_func():
    namepic = Workshop.workshopnamepic()
    name = Workshop.workshopname()
    name_work = []
    pic = []
    for name in namepic:
        name_work.append(name.workshop_name)
        pic.append('/images/' + name.workshop_name + '.png')
        link = '../web-project-g21/Flask Skeleton Project/pages/workshops/static/images/' + name.workshop_name + '.png'
        with open(link ,'wb') as f:
            f.write(name.picture)
    name_pic = zip(name_work,pic)
    return render_template('Workshops.html', namepic=name_pic, names=namepic)
