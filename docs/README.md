# Design db
## Product:
* name: string
* price: float
* images:
* description:
* product_info:
* refund_info:
* colors: has_many_belong_to
* Sizes: has_many_belong_to
* quantity:

## Color:
* name: string
* hex_code: string

## Size
* size name [s|sm|m|l|xl|xxls]

## Cart
* customer_id: foreign(Customer)

## CartLine
* product_id:
* quantity:
* color:
* size: has_one
* cart: foreign(Cart)

## Order
* customer_id: foreign(Customer, class: user)

## OrderLine
* product_id:
* quantity:
* color:
* size: has_one
* order: foreign(Order)

## customer_product
* product_type: [favorite_product, history_product]

## User:
* email: string
* password: string
* first_name: string
* last_name: string
* role: enum(supper_admin, admin, user)

## Subscribe
<!-- * email: string -->

## ShopInfo:  (can edit csm)
* about: text
* facebook_link: string
* instagram_link: string
* youtube_link: string

## FAQ: (can edit csm)
<!-- * title: string
* description: text (rich text can add image, list step)
* faq_type: enum([:setting_up, :general]) -->

## Contact
<!-- * customer_id:
* first_name:
* last_name:
* email:
* phone:
* message:
* status: enum (new_request, resolve, need_recontact) -->

## ContactAdmin
<!-- * contact_id
* admin_id
* message
* created_at -->

## ExchageCurrency

## Currency
## CompaignRomotion
## SubCommpaign
## Promotion
<!-- * name: string
* type: enum(persent, fix_price)
* value:
* persent: -->


