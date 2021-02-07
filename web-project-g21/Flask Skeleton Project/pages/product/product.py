from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Product import Product


# about blueprint definition
product = Blueprint('product', __name__, static_folder='static', static_url_path='/product', template_folder='templates')


@product.route('/product/<name>')
def main_func(name):
    price = Product.productprice(name)
    desc = Product.productdes(name)
    picture = Product.productpic(name)

    for pic in picture:
        picturelink = '/images/' + name + '.png'
        link = '../web-project-g21/Flask Skeleton Project/pages/product/static/images/' + name + '.png'
        with open(link, 'wb') as f:
            f.write(pic.Picture)

    return render_template('product.html', name=name, price=price, description=desc, link=picturelink)
