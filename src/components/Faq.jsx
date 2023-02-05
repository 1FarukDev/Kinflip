import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./Faq.css";
function Faq() {
  return (
    <section className="Faq">
      <div className="faq--get-ready">
        <h3 className="faq-heading">Get ready to register!</h3>
        <h5 className="faq-text">
          Register for the upcoming big fashion conference coming. Share, learn,
          connect and stay updated.
        </h5>
        <div id="register">
          <div id="nav-attendee">Register As An Attendee</div>
          <div id="nav-speaker">Register As A Speaker</div>
        </div>
        <div className="register---link">
        <h3>Register</h3>
     </div>
      </div>
      <div className="faq-section">
        <h3 className="faq-faq">Frequently Asked Questions</h3>
        <h5 className="faq-text">
          {" "}
          Get A list of frequently asked questions we’ve been able to gather
          from
        </h5>
        <div className="faq--questions">
            <div className="questions">Where is the location? <FaAngleRight /></div>
            <div className="questions">Where is the location? <FaAngleRight /></div>
            <div className="questions">Where is the location? <FaAngleRight /></div>
            <div className="questions">Where is the location? <FaAngleRight /></div>
            <div className="questions">Where is the location? <FaAngleRight /></div>
        </div>
      </div>
    
    </section>
  );
}

export default Faq;
