import React from "react";
import "./about.css";
export default function About() {
  return (
    <article id="About">
      <div className="about-text">
        <div className="about-header">
          <h3>About the Conference</h3>
        </div>
        <div className="about-subheader">
          <h5>Learn more about the upcoming conference.</h5>
        </div>
        <div className="about-texts">
        Flip Conference is an enlightening annual fashion conference in Nigeria
        that is created to debate and find answers to the common and major
        difficulties that the fashion industry is facing. The fashion world
        needs to understand the importance of technology in the future of
        fashion. The Flip conference is an avenue to educate the youths. Flip
        Conference is an enlightening annual fashion conference in Nigeria that
        is created to debate and find answers to the common and major
        difficulties that the fashion industry is facing. The fashion world
        needs to understand the importance of technology in the future of
        fashion.<span className="yellow">Read More....</span>
        </div>
      </div>

      <div className="about--count">
        <div className="speakers"><div className="speakers-number">5</div><p>Speakers</p></div>
        <div className="speakers"><div className="speakers-number">500</div><p>Attendees</p></div>
        <div className="speakers"><div className="speakers-number">10</div><p>Courses</p></div>
        <div className="speakers"><div className="speakers-number">7</div><p>Sessions</p></div>
      </div>
      <div className="speaker">
        <h3>Speakers</h3>
        <h4>We couldn't be more excited of our line up....</h4>
      </div>
    </article>
  );
}
