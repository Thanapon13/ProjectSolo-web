import axios from "axios";

export const getProfileUser = ProfileUserId =>
  axios.get("/users" + ProfileUserId);

export const updateUserInfo = input => {
  console.log(input, "aaaadddddddddddddda");
  return axios.patch("/users/info", input);
};

export const updateProfile = formData => axios.patch("/users", formData);
