const StripeCheckout = () => {
    return (  <div>
    <html>
  <head>
    <title>Buy cool new product</title>
  </head>
  <body>
   
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </body>
</html>
    </div>);
}
 
export default StripeCheckout;