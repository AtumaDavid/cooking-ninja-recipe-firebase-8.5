import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import searchicon from "../assests/search.svg";
import "./Searchbar.css";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        {/* <img src={searchicon} alt="search-icon" className="search-icon" /> */}
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Searchbar;
