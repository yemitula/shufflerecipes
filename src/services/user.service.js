/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL + "/test";

const getPublicContent = () => {
  return axios.get(API_URL + "/all");
};

export default {
  getPublicContent,
};
