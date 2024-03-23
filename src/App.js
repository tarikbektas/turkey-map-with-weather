import React, { useState } from "react";
import "./App.css";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "antd";
import Info from "./Info";
import { data } from "./cityDatajs";
import Weather from "./Weather";

function App() {
  const [cityName, setCityName] = useState("Samsun");
  const [tooltipContent] = useState("");

  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );
  return (
    <div className="App">
      <div>
        <TurkeyMap
          cityWrapper={renderCity}
          onClick={(city) => {
            setCityName(city.name);
          }}
        />
        ;{tooltipContent && <Tooltip></Tooltip>}
      </div>
      <div>
      <Info data={data} cityName={cityName}></Info>
        <Weather cityName={cityName}></Weather>
        
      </div>
    </div>
  );
}

export default App;
