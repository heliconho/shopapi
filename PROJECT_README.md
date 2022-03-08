Business flow

1. Create a product
    1.1 add product descriptions
    1.2 add product image
2. Create a listing for a product
    2.1 select product
    2.2 add a price
3. Publish the listing
    3.1 Live at?
    3.2 expiry?
4. shopper arrives at the website
    - look for token in browser
    - look for deviceId in browser (something we plant to localstorage if not found)
    - create a new cart for that shopper
        - add device info to the cart
    - if shopper signs in, link the cart to the shopper
5. shopper checks out
    4.1 create order from the cart
    4.2 check cart product price with db product price - should have like a fifteen minutes buffer to protect shopper from price update
6. payment.... tbd