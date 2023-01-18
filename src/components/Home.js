import React from "react";
import { useNavigate, Link } from "react-router-dom";
const Home = (props) => {
  const { Data, Loading } = props;
  const navigate = useNavigate();
  if (Loading) {
    return <h1 className="Loading wrapper">Loading...</h1>;
  }

  // seeMore button handler section start
  const seeMorehandler = () => {
    navigate("/SeeMore");
  };
  // seeMore button handler section end

  return (
    <>
      <div className=" movieContainer wrapper">
        <div className="movieCenter">
          {Data.slice(0, 9).map((eachItem) => {
            if ("image" in eachItem) {
              const { id } = eachItem;
              return (
                <article key={eachItem.id} className="eachMovie ">
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
        <div className="wrapper">
          <div className="ButtonCenter">
            <button className="SeeMoreButton" onClick={seeMorehandler}>
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
