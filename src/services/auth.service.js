/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL + "/auth";

const register = (user) => {
  return axios.post(API_URL + "/signup", user);
};

const login = (user) => {
  return axios.post(API_URL + "/signin", user).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
