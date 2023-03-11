import axios from "../config/axios";

export const getOrder = () => axios.get("/admin/adminOrder");

export const updateConfirmed = input =>
  axios.patch("/admin/statusUpdateConfirmed", input);
export const updateCancelOrde = input =>
  axios.patch("/admin/statusUpdateCancelOrder", input);
