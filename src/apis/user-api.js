import axios from "axios";

export const getProfileUser = ProfileUserId =>
  axios.get("/users" + ProfileUserId);

export const updateProfile = formData => axios.patch("/users", formData);
