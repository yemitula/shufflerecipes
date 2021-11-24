/* eslint-disable import/no-anonymous-default-export */
import { CREATE_RECIPE, LOAD_RECIPES, SET_MESSAGE } from "./types";

import RecipeService from "../services/recipe.service";

export const createRecipe = (userId, recipe) => (dispatch) => {
  return RecipeService.createUserRecipe(userId, recipe).then(
    (response) => {
      dispatch({
        type: CREATE_RECIPE,
        payload: response.data,
      });

      return Promise.resolve(response.data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(message);
    }
  );
};

export const loadRecipes = (userId) => (dispatch) => {
  return RecipeService.getUserRecipes(userId).then(
    (response) => {
      dispatch({
        type: LOAD_RECIPES,
        payload: response.data,
      });

      return Promise.resolve(response.data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(message);
    }
  );
};
