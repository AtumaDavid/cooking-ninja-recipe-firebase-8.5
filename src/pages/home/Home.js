import { projectFirestore } from "../../firebase/config";
import React, { useEffect, useState } from "react";

//styles
import "./Home.css";

//components
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsubscribe = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        // console.log(snapshot);
        if (snapshot.empty) {
          setError("No recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            // console.log(doc);
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    //clean up function
    return () => unsubscribe();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {/* {data && data.map (recipe => (<h2 key={recipe.id}>{recipe.title}</h2>))} */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
