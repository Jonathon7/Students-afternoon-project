import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-index">
        {props.index} of {props.length}
      </div>
      <h1>{props.name}</h1>
      <div className="card-header">
        <h2>
          <strong>From: </strong>
          {props.from}
        </h2>
        <h2>
          <strong>Fun Fact: </strong>
          {props.funFact}
        </h2>
      </div>
      <h2>
        <strong>Would you rather...</strong>
      </h2>
      <div>
        <ul className="card-list">
          <li>
            <strong>...live in the city or country?</strong>
            {props.cityOrCountry}
          </li>
          <li>
            <strong>...be indoors or outdoors?</strong>
            {props.indoorsOrOutdoors}
          </li>
          <li>
            <strong>travel every day or never leave home?</strong>
            {props.travel}
          </li>
          <li>
            <strong>...eat at Top's or Subway?</strong>
            {props.food}
          </li>
          <li>
            <strong>...have a dog or a cat?</strong>
            {props.dogOrCat}
          </li>
        </ul>
      </div>
    </div>
  );
}
