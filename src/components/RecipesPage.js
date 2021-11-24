import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import RecipeEditor from "./RecipeEditor";

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
          <div className="row">
            {!recipes ? (
              <div className="alert alert-warning" role="alert">
                You don't have any recipes yet. Please add one.
              </div>
            ) : (
              recipes.map((recipe) => (
                <div className="col-md-4 col-sm-12" key={recipe._id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <p className="card-text">
                        {recipe.description.substr(0, 100)}
                        {recipe.description.length > 100 && "..."}
                      </p>
                      <p className="card-text text-muted">
                        Cooking Time: <strong>{recipe.cookingTime}</strong>{" "}
                        minutes
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipesPage;
