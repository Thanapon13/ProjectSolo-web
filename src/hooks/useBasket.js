import { useContext } from "react";
import { BasketContext } from "../contexts/basKetContext";

export default function useBasket() {
  return useContext(BasketContext);
}
