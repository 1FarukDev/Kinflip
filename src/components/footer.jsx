import React from "react";
import "./footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaPinterest,
  } from "react-icons/fa";
import Kinflip from "./images/kinflip.png";
import Register from "./register";
function Footer() {
 
  return (
    <section id="footer">
      <img src={Kinflip} alt="KinFlip Logo" width={150} />
      <div className="footer--section">
        <div className="footer-contact">
          <article className="footer-details">
            <h5 className="footer-head">Contact Us</h5>
            <h5 className="footer--text">
              Address: Obafemi Awolowo University, Ile Ife
            </h5>
            <h5 className="footer--text">phone: +23490 12345678</h5>
            <h5 className="footer--text">Email: kinflipp@yahoo.com</h5>
          </article>
        </div>
        <div className="footer-registration">
          <article className="footer-details">
            <h5 className="footer-head">Register</h5>
            <h5 className="footer--text">As attendee</h5>
            <h5 className="footer--text">As speaker</h5>
          </article>
        </div>
        <div className="footer-information">
          <article className="footer-details">
            <h5 className="footer-head">Information</h5>
            <h5 className="footer--text">Sponsorship</h5>
            <h5 className="footer--text">Donations</h5>
            <h5 className="footer--text">partnership</h5>
          </article>
        </div>
        <div className="footer-newsletter">
          <article className="footer-details">
            <h5 className="footer-head ">Subscribe to our newsletter</h5>
            <h5 className="footer--text">
              Subscribe to our newsletter to get <br /> updates about the
              upcoming conference
            </h5>
            <div className="newsletter">
              <input type="text" placeholder="Enter Email" className="footer--input"/>
              <div className="subscribe">Subscribe</div>
            </div>
          </article>
        </div>
      </div>
      <hr />
      <div className="footer-copy">
        <div className="copy-text">Copyright 2022 | All Rights Reserved</div>
        <div className="copy-icon">
          <div id="footer-socials">
            <div className="social-icons">
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <FaTwitter />
              </div>
              <div className="icons">
                <FaInstagram />
              </div>
              <div className="icons">
                <FaLinkedin />
              </div>
              <div className="icons">
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
