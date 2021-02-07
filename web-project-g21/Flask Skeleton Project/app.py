from flask import Flask, redirect, url_for, render_template, blueprints, jsonify
from flask import request, session
from datetime import timedelta
import mysql.connector

app = Flask(__name__)

app.secret_key = '123'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)

if __name__ == '__main__':
    app.run(debug=True)

from pages.about.about import about
app.register_blueprint(about)

from pages.about.about import about
app.register_blueprint(about)

from pages.home.home import home
app.register_blueprint(home)


from pages.connect.connect import connect
app.register_blueprint(connect)


from pages.contactMe.contactMe import contactMe
app.register_blueprint(contactMe)


from pages.GiftCard.GiftCard import GiftCard
app.register_blueprint(GiftCard)


from pages.product.product import product
app.register_blueprint(product)


from pages.recipes.recipes import recipes
app.register_blueprint(recipes)


from pages.shop.shop import shop
app.register_blueprint(shop)


from pages.specific_recipe.specific_recipe import specific_recipe
app.register_blueprint(specific_recipe)


from pages.specific_workshop.specific_workshop import specific_workshop
app.register_blueprint(specific_workshop)


from pages.workshops.workshops import workshops
app.register_blueprint(workshops)

