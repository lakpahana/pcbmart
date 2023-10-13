PCBMart

marketplace to buy and sell pcb services

company
-------

-register
-login
-create product
-edit prpdouct
-delete product
-view products
-view orders

buyers
------

-register
-login
-search
-order
-see orders


models
------

company
buyers
products
orders

buyer
-name
-email
-password
-phone

company
-name
-email
-password
-phone
-address

product
-name
-description
-price
-company
-image

order
-buyer
-product
-file
-address
-description
-quantity
-total
-date
-order status


authentications

company 
    -create /update /delete product

buyer
    -create order

API
---

backend -> API -> frontend

User

Post
/api/v1/users
- name
- email
- password

- user /error



Get
/api/v1/users

Delete
/api/v1/users/:id

Put
/api/v1/users/:id


Product

Post
/api/v1/products
- name
- description
- price
- company
- image

- product /error



