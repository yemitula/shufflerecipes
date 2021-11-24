import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import RecipeCard from "./RecipeCard";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with recipe passed in props", () => {
  const myRecipe = {
    title: "My Recipe",
    description: "This is my recipe",
    cookingTime: "30",
  };

  act(() => {
    render(<RecipeCard recipe={myRecipe} />, container);
  });
  expect(container.querySelector(".card-title").textContent).toBe(
    myRecipe.title
  );
  expect(container.querySelector(".card-text").textContent).toContain(
    myRecipe.description.substr(0, 100)
  );
});
