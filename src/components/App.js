import React, { useEffect, useState } from "react";
import { Nabvar } from "./Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import SeeMore from "./SeeMore";
import Details from "./Details";
import Login from "./Login";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/v2/find",
  params: { title: "game of", limit: "20", sortArg: "moviemeter,asc" },
  headers: {
    "X-RapidAPI-Key": "9be3d48b05msh94a4630fd21ee8fp130fd0jsndfe09e887183",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};
function App() {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  // API fetching section start
  const dataFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);
  // API fetching section end

  return (
    <div className="App">
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home Loading={Loading} Data={Data} />} />
        <Route
          path="/SeeMore"
          element={<SeeMore Loading={Loading} Data={Data} />}
        />
        <Route path="/Details/title/:id" element={<Details Data={Data} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
