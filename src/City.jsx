import React from "react";

const City = ({ city }) => {
  if (!city) {
    return <div>Loading...</div>
  }

  if (!city.main) {
    return <div>No weather information available</div>
  }

  return (
    <div>
      <h1>{city.name}</h1>
      <p>Temperature: {city.main.temp} °C</p>
      
    </div>
  );
};

export default City;
