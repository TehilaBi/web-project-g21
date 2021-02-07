from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Product import Product



# about blueprint definition
shop = Blueprint('shop', __name__, static_folder='static', static_url_path='/Shop', template_folder='templates')


@shop.route('/Shop/<category>')
def category_func(category):
    names = Product.productname(category)
    name_prod = []
    pic = []
    for name in names:
        name_prod.append(name.name_product)
        pic.append('/images/' + name.name_product + '.png')
        link = '../web-project-g21/Flask Skeleton Project/pages/shop/static/images/' + name.name_product + '.png'
        with open(link, 'wb') as f:
            f.write(name.Picture)

    name_pic = zip(name_prod, pic)
    return render_template('Shop.html', namepic=name_pic)


@shop.route('/Shop/')
def main_func():
    namesdesc = Product.productnamedesc()
    namesasc = Product.productnameasc()
    name_proddesc = []
    picdesc = []
    name_prodasc = []
    picasc = []
    for name in namesdesc:
        name_proddesc.append(name.name_product)
        picdesc.append('/images/' + name.name_product + '.png')
        link = '../web-project-g21/Flask Skeleton Project/pages/shop/static/images/' + name.name_product + '.png'
        with open(link, 'wb') as f:
            f.write(name.Picture)
    name_picdesc = zip(name_proddesc, picdesc)
    for name in namesasc:
        name_prodasc.append(name.name_product)
        picasc.append('/images/' + name.name_product + '.png')
        link = '../web-project-g21/Flask Skeleton Project/pages/shop/static/images/' + name.name_product + '.png'
        with open(link, 'wb') as f:
            f.write(name.Picture)
    name_picasc = zip(name_prodasc, picasc)
    return render_template('Shop.html', namepicdesc=name_picdesc, namepicasc=name_picasc)
