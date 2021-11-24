/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/recipes";

const getUserRecipes = (userId) => {
  return axios.get(`${API_URL}/${userId}`, {
    headers: authHeader(),
  });
};

const createUserRecipe = (userId, recipe) => {
  return axios.post(`${API_URL}/${userId}`, recipe, {
    headers: authHeader(),
  });
};

export default {
  getUserRecipes,
  createUserRecipe,
};
