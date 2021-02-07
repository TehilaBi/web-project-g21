from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Workshop import Workshop


# about blueprint definition
specific_workshop = Blueprint('specific_workshop', __name__, static_folder='static', static_url_path='/specificWorkshop', template_folder='templates')


@specific_workshop.route('/Workshop/<name>')
def main_func(name):
    price = Workshop.workshopprice(name)
    desc = Workshop.workshopdes(name)
    picture = Workshop.workshoppic(name)
    workshop_date = Workshop.workshopdate(name)

    for pic in picture:
        picturelink = '/images/' + name + '.png'
        link = '../web-project-g21/Flask Skeleton Project/pages/specific_workshop/static/images/' + name + '.png'
        with open(link, 'wb') as f:
            f.write(pic.picture)

    return render_template('specificWorkshop.html', name=name, price=price, des=desc, picture=picturelink, workshop_date=workshop_date)
