/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "http://localhost:8080/api/test";

const getPublicContent = () => {
  return axios.get(API_URL + "/all");
};

export default {
  getPublicContent,
};
