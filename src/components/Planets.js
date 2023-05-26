import React from "react";
import { useState, useEffect } from "react";

function Planet() {
  const [planet, setPlanet] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://planets-by-api-ninjas.p.rapidapi.com/v1/planets", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ede885363amshfeeea7c0212df0fp1f59a3jsn2a6883430d3e",
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, planet }) => {
    setPlanet(planet);
    setName(name);
  };

  return (
    <div className="container">
      <h2> Planet App</h2>
      {planet}
    </div>
  );
}

export default Planet;
