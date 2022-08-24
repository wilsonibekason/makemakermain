import React, { useState, useEffect } from "react";
import Message from "./Success";
import Carts from "./Carts";
const Checkout = () => {
  const { message, setMessage } = useState("");
  // check if product redirect from the checkout
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return message ? <Message message={message} /> : <Carts />;
};
export default Checkout;
