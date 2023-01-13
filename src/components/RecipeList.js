import { Link } from "react-router-dom";
import Delete from "../assests/delete.svg";
import { projectFirestore } from "../firebase/config";

//styles
import "./RecipeList.css";

//useTheme
import { useTheme } from "../hooks/useTheme";

import React from "react";

const Recipe = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  //delete recipe
  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook this</Link>{" "}
          <img
            src={Delete}
            alt="delete"
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Recipe;
