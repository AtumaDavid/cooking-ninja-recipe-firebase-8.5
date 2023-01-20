import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

//styles
import "./Navbar.css";

import React from "react";

//components
import Searchbar from "./Searchbar";

const Navbar = () => {
  // //const { color }===>>> returns whatever the value prop is from the indexjs... destructure the color property
  // const { color } = useContext(ThemeContext);
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />

        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
