import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            {recipe.description.substr(0, 100)}
            {recipe.description.length > 100 && "..."}
          </p>
          <p className="card-text text-muted">
            Cooking Time: <strong>{recipe.cookingTime}</strong> minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
