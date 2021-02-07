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

    for pic in picture:
        picturelink = '/images/' + name + '.png'
        link = '../web-project-g21/Flask Skeleton Project/pages/specific_workshop/static/images/' + name + '.png'
        with open(link, 'wb') as f:
            f.write(pic.picture)

    return render_template('specificWorkshop.html', name=name, price=price, des=desc, picture=picturelink)



@specific_workshop.route('/requestpruchwork/<name>',methods=['GET', 'POST'])
def purchaseprod(name):
    from utilities.classes.Purchase import Purchases
    if request.method == 'POST':
        pr = Workshop.workshopprice(name)
        price = 0
        for p in pr:
            price = p.Price
        workshop_id = Workshop.workshopid(name)
        workshopid = 0
        for i in workshop_id:
            workshopid = i.workshop_Id

        from datetime import date
        today = date.today()
        date = today.strftime("%Y-%m-%d")
        quantity = request.form['quantitywork']
        totalprice = price*int(quantity)
        work = Purchases()
        work.purchases_Id = work.id()
        work.purchases_date = date
        work.workshop_id = workshopid
        work.Price = totalprice
        work.insertPurch()
    return redirect('/Shop/')