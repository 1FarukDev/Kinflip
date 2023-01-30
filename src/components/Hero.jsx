import React from "react";
import "./herostyle.css";
import heroimg from "./images/heroimage.png";
// import hero from "./images/hero.png";
export default function Hero({timerDays, timerHours, timerMinutes, timerSeconds}) {
  return (
    <div>
      <section id="hero--section">
        <div id="hero">
          <div className="hero-text">
            <h1>
              Future <span className="yellow">Fashion</span>
            </h1>
            <h1>
              Industry <span className="yellow">Conference</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              optio obcaecati rerum sunt facilis blanditiis doloribus laborum
              nemo possimus nisi?
            </p>
            <div id="register-1">
              <div id="nav-attendee">Register As An Attendee</div>
              <div id="nav-speaker">Register As A Speaker</div>
            </div>
          </div>
          <div id="attendee2">Register For Free</div>
          <div className="hero-countdown">
            <div className="yellow conference-text"><h4>FFI CONFERENCE</h4></div>
            <section className="timer-container">
                <section className="timer">
                  <div className="clock">
                    <section className="days">
                      <p>{timerDays}</p>
                      <small>Days</small>
                    </section><span>:</span>
                    <section className="days">
                      <p>{timerHours}</p>
                      <small>Hours</small>
                    </section><span>:</span>
                    <section className="days">
                      <p>{timerMinutes}</p>
                      <small>Minutes</small>
                    </section><span>:</span>
                    <section className="days">
                      <p>{timerSeconds}</p>
                      <small>Seconds</small>
                    </section>
                  </div>
                </section>
            </section>
            {/* <img src={hero} alt="" /> */}
          </div>
        </div>
        <div className="heroimg">
          <img src={heroimg} alt="heroimage" className="heroimage" />
        </div>
      </section>
    </div>
  );
}

// Hero.defaultProps={
//   timerDays:10,
//   timerHours:10,
//   timerMinutes:10,
//   timerSeconds:10,
// }