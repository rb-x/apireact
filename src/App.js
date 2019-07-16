import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Formulaire from "./components/Formulaire";

function App() {
  let [value, setValue] = useState("");
  let [apiData, setapiData] = useState("X");

  const handleSubmit = (event, text) => {
    event.preventDefault();
    setValue(text);
  };

  async function fetchApi() {
    const debug = "https://cors-anywhere.herokuapp.com/";

    let data = await fetch(
      `${debug}https://api.apixu.com/v1/forecast.json?key=b801de86ebde46599f584042190406&q=${value}&days=7${
        !value ? "Paris" : value
      }`
    )
      .then(data => data.json())
      .then(json => {
        console.log(json);
        setapiData(json);
      });
    console.log("datapi", apiData);
    return await data;
  }

  useEffect(() => {
    fetchApi();
    console.log(apiData);
    return;
  }, []);

  return (
    <div className="App">
      <h1 className="text-center font-weight-bold">
        Ip finder
        <span role="img" aria-label="sheeped">
          🐑🥤🤡
        </span>
      </h1>
      <div className="container">
        <Formulaire handleSubmit={handleSubmit} />
        <Content result={apiData ? apiData : "nothing"} />
      </div>
    </div>
  );
}

export default App;
