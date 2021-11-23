/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test";

const getPublicContent = () => {
  return axios.get(API_URL + "/all");
};

const getUserContent = () => {
  return axios.get(API_URL + "/user", {
    headers: authHeader()
  });
};

const getAdminContent = () => {
  return axios.get(API_URL + "/admin", {
    headers: authHeader()
  });
}

export default {
  getPublicContent,
  getUserContent,
  getAdminContent,
};