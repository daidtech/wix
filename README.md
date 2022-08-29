# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# FUNCTIONS:
template: (https://www.wix.com/website-template/view/html/2175?siteId=f079a559-b478-4643-a17b-13edb1ee067b&metaSiteId=f9bf8eee-6569-46fa-b4e8-e6b8ca8990c1&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store&tpClick=view_button)

list function:
* show list product item (price, images (have many image), name, code_product, color, price, )
* view detail show product info, return & refunction description, shipping info, product description
* cart (product items, price, name, thumnail, quantity)
* cart page (voucher, add note, summary price, shipping, choose country, )
* search product
* login
* cms write about the page
* link to facbook intergram
* chat popup
* Q&A
* Contact
* subscrible email
* contact

Stage 1:
Userpage:
+ show list product
+ show product detail
Admin page:
+ admin page to add product
Stage 2:
Stage 3:


# Schema:
* Promotion

* Order
+ origin (reference location)
+ destination (reference location )
+ total_amount
+ net_amount
+ vat_amount
+ status
+ currency
+ note

* OrderLine
+ order (reference)
+ product (reference)
+ color (reference)
+ quantity
+ net_amount
+ total_amount
+ vat_amount
+ currency

* Payment
+ total_amount
+ net_amount
+ vat_amount
+ status
+ currency

* Product
+ image
+ zoomed_image
+ name
+ price
+ currency
+ product_code
+ heart_count
+ heart (reference)
+ colors (reference)
+ product_detail
+ refunc_policy
+ shipping_info
+ product_description

* Color
+ name
+ color_code

* Heart
+ user (reference)
+ date

* Info
+ about shop
+ link_face_book
+ intergram
+ wixcom

* Cart
+ product (reference)
+ quantity
+ location (reference)

* Location
+ country (reference)
+ state (reference)
+ city (reference)
+ address

* Country
+ name

* State
+ name
+ country (reference)

* City
+ name
+ state (reference)