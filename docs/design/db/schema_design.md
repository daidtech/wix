Promotion

Order
+ origin (reference location)
+ destination (reference location )
+ total_amount
+ net_amount
+ vat_amount
+ status
+ currency
+ note

OrderLine
+ order (reference)
+ product (reference)
+ color (reference)
+ quantity
+ net_amount
+ total_amount
+ vat_amount
+ currency

Payment
+ total_amount
+ net_amount
+ vat_amount
+ status
+ currency

Product
+ image
+ name
+ price
+ currency
+ product_code
+ heart_count
+ heart (reference)
+ product_detail
+ refund_policy
+ shipping_info
+ product_description
+ product_details (reference)

ProductDetail
+ colors (reference)
+ images

Color
+ name
+ color_code

Heart
+ user (reference)
+ date

Info
+ about shop
+ link_face_book
+ instagram
+ twitter
+ wixcom

Cart
+ product (reference)
+ quantity
+ location (reference)

Location
+ country (reference)
+ state (reference)
+ city (reference)
+ address

Country
+ name

State
+ name
+ country (reference)

City
+ name
+ state (reference)