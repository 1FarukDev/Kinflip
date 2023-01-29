import React from "react";
import "./sponsorsdetails.css";
function Sponsorsdetails(props) {
  // console.log(props);
  return (
      <section>
        <img src={`../images/${props.coverImg}`} alt="Sponsor Image" className="speaker-img"/>
        <div className="sponsor-text">
          <h1>{props.name}</h1>
          <h3>Founder: {props.founder}</h3>
        </div>
      </section>
  );
}

export default Sponsorsdetails;
