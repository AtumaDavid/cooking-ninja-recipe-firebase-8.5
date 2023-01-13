import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

//styles
import "./Recipe.css";

//usetheme
import { useTheme } from "../../hooks/useTheme";

const Recipe = () => {
  const { mode } = useTheme();
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    //to get a single document from collection
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc);
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("could not find that recipe");
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading</p>}
      {/* {recipe && <h1>{recipe.title}</h1>} */}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
