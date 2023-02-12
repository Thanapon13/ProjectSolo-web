import React, { createContext, useEffect, useState } from "react";
import * as cartApi from "../apis/cart-api";

export const BasketContext = createContext();

export default function BasketContextProvider({ children }) {
  const [basket, setBasket] = useState([]);

  useEffect(async () => {
    const res = await cartApi.getCart();
    console.log(res);
  }, []);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
