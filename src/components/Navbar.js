import React from "react";
import { Link } from "react-router-dom";
import { FaCanadianMapleLeaf } from "react-icons/fa";
export const Nabvar = () => {
  return (
    <>
      <nav>
        <div className="navContainer ">
          <div className="navCenter wrapper">
            <div className="Logo">
              <FaCanadianMapleLeaf />
            </div>
            <div className="InputContainer">
              <input type="text" placeholder="Search" />
            </div>
            <div className="Links">
              <nav>
                <Link to="/">Home</Link>
                <Link>Language</Link>
                <Link>Genre</Link>
                <Link to={"/Login"}>Account</Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
