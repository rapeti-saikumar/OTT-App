import React from "react";
import { Link } from "react-router-dom";
const SeeMore = (props) => {
  const { Data, Loading } = props;
  if (Loading) {
    return <h1 className="Loading wrapper">Loading...</h1>;
  }
  return (
    <>
      <div className=" movieContainer wrapper">
        <div className="movieCenter">
          {Data.map((eachItem) => {
            const { id } = eachItem;
            if ("image" in eachItem) {
              return (
                <article key={eachItem.id} className="eachMovie">
                  <div className="ImgContainer">
                    <img src={eachItem.image.url} alt="image" />
                  </div>
                  <div className="movieContent">
                    <h3 className="movietitle">{eachItem.title}</h3>
                    <Link to={`/Details${id}`}>
                      <button className="playNowButton">Play now</button>
                    </Link>
                  </div>
                </article>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default SeeMore;
