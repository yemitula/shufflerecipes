import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import RecipeEditor from "./RecipeEditor";
import RecipeList from "./RecipeList";

import { loadRecipes } from "../actions/recipe";

const RecipesPage = () => {
  const recipes = useSelector((state) => state.recipes);
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    dispatch(loadRecipes(currentUser.id));
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Your Recipes</h3>
      </header>
      <div className="row">
        <section className="col-md-3">
          <RecipeEditor />
        </section>
        <section className="col-md-9">
          <RecipeList recipes={recipes} />
        </section>
      </div>
    </div>
  );
};

export default RecipesPage;
