import React from "react";

const Countrie = (props) => {
  return (
    <div className="countrie">
      <img src={props.flag} alt={props.name} />
      <div className="info-container">
        <h2 className="country-name">{props.name}</h2>
        <p className="population info">
          Population: {props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
        <p className="region info">Region: {props.region}</p>
        <p className="capital info">Capital: {props.capital}</p>
      </div>
    </div>
  );
};

export default Countrie;
