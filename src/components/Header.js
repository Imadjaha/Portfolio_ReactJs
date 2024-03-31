import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 20,
    textDecoration: "none",
    padding: "1px 10px",
  };
  return (
    <div>
      <div>
        <h2 style={style}>
          <Link to="/" style={style}>
            Home
          </Link>
        </h2>
        <h2 style={style}>
          <Link to="/Quotes" style={style}>
            Quotes
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
