from flask import Blueprint, render_template
from flask import Flask, redirect,  flash
from flask import request, session
import mysql.connector
from utilities.classes.Product import Product


# about blueprint definition
product = Blueprint('product', __name__, static_folder='static', static_url_path='/product', template_folder='templates')


@product.route('/product/<name>')
def main_func(name):
    prices = Product.productprice(name)
    desc = Product.productdes(name)
    picture = Product.productpic(name)
    for pri in prices:
        price = pri.Price

    for pic in picture:
        picturelink = '/images/' + name + '.png'
        link = '../web-project-g21/Flask Skeleton Project/pages/product/static/images/' + name + '.png'
        with open(link, 'wb') as f:
            f.write(pic.Picture)

    return render_template('product.html', name=name, price=price, description=desc, link=picturelink)


@product.route('/requestpruch/<name>',methods=['GET', 'POST'])
def purchaseprod(name):
    from utilities.classes.Purchase import Purchases
    if request.method == 'POST':
        pr = Product.productprice(name)
        price = 0
        for p in pr:
            price = p.Price
        product_id = Product.productid(name)
        prodid = 0
        for i in product_id:
            prodid = i.product_Id

        from datetime import date
        today = date.today()
        date = today.strftime("%Y-%m-%d")
        quantity = request.form['quantity']
        totalprice = price*int(quantity)
        prod = Purchases()
        prod.purchases_Id = prod.id()
        prod.purchases_date = date
        prod.product_id = prodid
        prod.Price = totalprice
        prod.insertPurch()

    return redirect('/Shop/')