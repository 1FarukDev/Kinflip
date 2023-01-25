import { Component } from "react";
import "./navbarStyles.css";
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
              {/* <div id="search">
                <input type="search" className="search" placeholder="Search for a Keyword...." /><div className="serach--icon"><i className="fa fa-search"></i></div>
              </div> */}
              <div id="search">
                <div id="search-input"><input type="text" placeholder="Search for a keyword..."/></div>
                <div id="search-icon"><i className="fa fa-search fa-lg"></i></div>
              </div>
              <span className="mobile-links">
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
                <a href="#" className="news">Newsletter</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#" className="mission">Mission And Vision</a>
              </li>
              </span>
              <span className="desktop-links">
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
                <a href="#">FAQ</a>
              </li>
              
              </span>
               <div id="socials">
                <div className="social-icons">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-github"></i>
                  <i className="fa fa-twitter"></i>
                </div>
               </div>
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
