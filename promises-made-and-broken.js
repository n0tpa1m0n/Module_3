async function submitOrder(user) {
  try {
    const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
    const profile = await CustomerAPI.getProfileAsync(user);

    const zipCode = profile.zipCode;
    const shippingRate = calculateShipping(shoppingCart, zipCode);

    const orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);

    console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
  } catch (err) {
    console.log("Error submitting order:", err);
  }
}