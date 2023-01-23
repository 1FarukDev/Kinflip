import { Component } from "react";
import "./navbarStyles.css";
import logo from "./images/kinlogo.png";
import kin from './images/kinmain.png'
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <a href="#">
          <div id="logo">
            <img src={kin} alt="" className="nav-logo" />
          </div>
        </a>
        <div>
          <div id="nav-links">
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
            <div id="register">
              <div id="nav-attendee">Register As An Attendee</div>
              <div id="nav-speaker">Register As A Speaker</div>
            </div>
            <div id="nav-register">Register
            <select name="" id="">
              <option value="">Register As An Attendee</option>
              <option value="">Register As A Speaker</option>
              
              </select></div>
          </div>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          >
            {" "}
          </i>
        </div>
      </nav>
    );
  }
}
export default Navbar;
