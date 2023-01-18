import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = (props) => {
  let { id } = useParams();
  const [Desc, setDesc] = useState("");
  let uniqueId = "/title/".concat(id).concat("/");
  const { Data } = props;
  const response = Data.find((obj) => {
    return obj.id == uniqueId;
  });
  const type = response.titleType;
  const similarMovies = Data.filter((eachObj) => {
    return eachObj.titleType == type;
  });
  return (
    <>
      <div className="DetailsConatiner wrapper">
        <div className="SeperaterContainers">
          <div className="DetailsCenter">
            <div className="Header">
              <div className="ImgConatiner">
                <img src={response.image.url} alt="image" />
              </div>
              <div className="Actions">
                <div className="movieDetais">
                  <h3>{response.title}</h3>
                  <p>{response.titleType}</p>
                  <p>Year: {response.year}</p>
                </div>
                <div className="ActionButtons">
                  <div>
                    <button className="WatchNowButton">Watch Now</button>
                  </div>
                  <div>
                    <button className="WatchLaterButton">Watch Later</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, expedita vitae obcaecati dolorum animi ad. Doloribus
                assumenda temporibus non asperiores. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quidem quam excepturi commodi
                deserunt sit molestiae itaque alias perspiciatis ea dolore
                nostrum expedita tenetur accusamus deleniti, illo sint. Ea
                blanditiis, animi hic nisi expedita soluta dolor repellat nam.
                Cupiditate, qui nesciunt illum cum in nam? Dolor tempora dolorum
                recusandae cum sunt autem, possimus assumenda earum velit
                repudiandae iusto voluptatum odit voluptates! Eius nesciunt
                veniam cum commodi neque provident modi consequuntur, dicta
                mollitia? Nostrum pariatur explicabo, voluptas, nulla assumenda
                provident autem amet ut laborum unde, nam fugiat alias doloribus
                aperiam rem necessitatibus incidunt totam. Consequatur
                reiciendis, nobis error laudantium et numquam a?
              </p>
            </div>
          </div>
          <div>
            <h2 className="RecommendationsTitle">Recommendations</h2>
            <div className="Recommendations">
              {similarMovies.map((eachItem) => {
                if ("image" in eachItem && eachItem.id !== id) {
                  return (
                    <article key={eachItem.id} className="eachMovie recommond">
                      <div className="ImgContainer">
                        <img src={eachItem.image.url} alt="image" />
                      </div>
                      <div className="movieContent">
                        <h3 className="movietitle">{eachItem.title}</h3>
                        <Link to={`/Details${eachItem.id}`}>
                          <button className="playNowButton recommondPlayButton">
                            Play now
                          </button>
                        </Link>
                      </div>
                    </article>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
