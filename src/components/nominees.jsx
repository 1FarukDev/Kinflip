import React from "react";
import './nominees.css'
function Nominees(props) {
  return (
    <section id="">
      <section className="first">
        <img src={`../images/${props.img}`} alt="" />
        <h3>{props.title}</h3>
        <h4>{props.text}</h4>
      </section>
    </section>

  );
}

export default Nominees;
