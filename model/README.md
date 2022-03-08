Business flow

1. yoyo create a product
2. publish the product with a pricing
3. shopper arrives at the website
    3.1 create a new cart for that shopper
    3.2 if shopper signs in, link the cart to the shopper
4. shopper checks out
    4.1 create order from the cart
    4.2 check cart product price with db product price - should have like a fifteen minutes buffer to protect shopper from price update
5. payment.... tbd