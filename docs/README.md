# Design db
## Product:
* name: string
* price: float
* currency:
* images:
* description:
* product_info:
* refund_info:
* colors: has_many_belong_to
* Sizes: has_many_belong_to
* quantity:

## COlor:
## Size
* size name [s|sm|m|l|xl|xxls]
## Cart
* customer_id: foreign(Customer, class: user)


## CartLine
* product_id:
* quantity:
* color:
* cart: foreign(Cart, class: Cart)

## Order

## OrderDetail


## customer_product
* product_type: [favorite_product, history_product]

## User:
* email: string
* password: string
* last_name: string
* first_name: string
* role: enum(supper_admin, admin, user)

## Subscribe
* email: string

## ShopInfo:  (can edit csm)
* about: text
* facebook_link: string
* instagram_link: string
* youtube_link: string

## FAQ: (can edit csm)
* title: string
* description: text (rich text can add image, list step)
* faq_type: enum([:setting_up, :general])

## Contact
* customer_id:
* first_name:
* last_name:
* email:
* phone:
* message:
* status: enum (new_request, resolve, need_recontact)

## ContactAdmin
* contact_id
* admin_id
* contact_notes
* schedule_at

## ExchageCurrency

## Currency

## CompaignRomotion
## SubCommpaign
## Promotion
* name: string
* type: enum(persent, fix_price)
* value:
* persent:

## Blog:
* title
* thumb_nail
* content
* description
* admin_id: foreign(Admin: class: User)
