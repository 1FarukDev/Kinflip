import React from "react";
import './nominees.css'
function Nominees(props) {
  return (
    <section id="nominees">
      <h3 className="nominees-text">Nominees</h3>
      <h4 className="nominees--text">Check out our Award Nominees and Categories</h4>

      <a href="#"><h5 className="vote">VOTE NOW</h5></a>
    </section>
  );
}

export default Nominees;
