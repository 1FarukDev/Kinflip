import React from "react";
import './nominees.css'
function Nominees(props) {
  return (
    <section id="">
      <section className="Nominees-card">
        <img src={`../images/${props.img}`} alt=""   className="nomineesImage" />
        <h3>{props.title}</h3>
        <h4>{props.text}</h4>
      </section>
    </section>

  );
}

export default Nominees;
