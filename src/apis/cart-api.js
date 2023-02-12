import axios from "axios";

export const createCart = (body, productId) =>
  axios.post(`/baskets/${productId}`);

export const getCart = () => axios.get("/baskets/getCart");

export const deleteCart = basketsId => axios.delete(`/baskets/${basketsId}`);
