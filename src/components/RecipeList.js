import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="row">
      {!recipes.length ? (
        <div className="alert alert-warning mt-5" role="alert">
          You don't have any recipes yet. Please add one.
        </div>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
      )}
    </div>
  );
};

export default RecipeList;
