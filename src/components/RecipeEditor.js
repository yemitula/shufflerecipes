import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createRecipe } from "../actions/recipe";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TextArea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const RecipeEditor = () => {
  const form = useRef();
  const checkBtn = useRef();

  const blankRecipe = {
    title: "",
    description: "",
    cookingTime: "",
  };

  const [recipe, setRecipe] = useState(blankRecipe);

  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const saveRecipe = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(createRecipe(currentUser.id, recipe))
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={saveRecipe} ref={form}>
          <div>
            <div className="form-text">Create a new recipe</div>
            <div className="form-group">
              <label htmlFor="username">Title</label>
              <Input
                type="text"
                className="form-control"
                name="title"
                value={recipe.title}
                onChange={handleInputChange}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <TextArea
                className="form-control"
                name="description"
                value={recipe.description}
                onChange={handleInputChange}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cookingTime">Cooking Time (minutes)</label>
              <Input
                type="number"
                className="form-control"
                name="cookingTime"
                value={recipe.cookingTime}
                onChange={handleInputChange}
                validations={[required]}
              />
            </div>

            <div className="form-group mt-2">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Save Recipe</span>
              </button>
            </div>
          </div>

          {message && (
            <div className="form-group">
              <div className={`alert alert-danger`} role="alert">
                {message}
              </div>
            </div>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default RecipeEditor;
