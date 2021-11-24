import { CREATE_RECIPE, LOAD_RECIPES } from "../actions/types";

const initialState = [];

export function recipeReducer(recipes = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_RECIPE:
      return [...recipes, payload];
    case LOAD_RECIPES:
      return payload;
    default:
      return recipes;
  }
}

export default recipeReducer;
