import { Component } from "react";
import "./navbarStyles.css";
import kin from "./images/kinflip.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

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
                <div id="search-input">
                  <input type="text" placeholder="Search for a keyword..." />
                </div>
                <div id="search-icon">
                  <i className="fa fa-search fa-lg"></i>
                </div>
              </div>
              <span className="mobile-links">
                <li>
                  <NavLink to='' className="active" >
                    Home
                  </NavLink >
                </li>
                <li>
                  <NavLink  to='/faq'>FAQ</NavLink >
                  
                </li>
                <li>
                  <NavLink  to=''>Contact Us</NavLink >
                </li>
                <li>
                  <NavLink  to='' className="news">
                    Newsletter
                  </NavLink >
                </li>
                <li>
                  <NavLink  to=''>About Us</NavLink >
                </li>
                <li>
                  <NavLink  to='' className="mission">
                    Mission And Vision
                  </NavLink >
                </li>
              </span>
              <span className="desktop-links">
                <li>
                  <NavLink  className={({isActive}) => (isActive ? 'active' : 'link')} to=''>
                    Home
                  </NavLink >
                </li>
                <li>
                  <NavLink  to='' 

                  className={({isActive}) => (isActive ? 'active' : 'link')}
                  
                  >Contact Us</NavLink >
                </li>
                <li>
                  <NavLink  to='' 
                  className={({isActive}) => (isActive ? 'active' : 'link')}>
                    
                    About Us</NavLink >
                </li>

                <li>
                  <NavLink  to='/faq' 
                  className={({isActive}) => (isActive ? 'active' : 'link')}>
                    FAQ</NavLink >
                  {/* <link to="/Faq">FAQ</link> */}
                </li>
              </span>
              <div id="socials">
                <div className="social-icons">
                  <div className="instagram">
                    <FaFacebookF />
                  </div>
                  <div className="instagram">
                    <FaTwitter />
                  </div>
                  <div className="instagram">
                    <FaInstagram />
                  </div>
                  <div className="instagram">
                    <FaLinkedin />
                  </div>
                  <div className="instagram">
                    <FaPinterest />
                  </div>
                </div>
              </div>
            </ul>
            <div id="register">
              <div id="nav-attendee">Register As An Attendee</div>
              <div id="nav-speaker">Register As A Speaker</div>
            </div>
            <div id="nav-register">
              Register
              <select name="" id="">
                <option value="">Register As An Attendee</option>
                <option value="">Register As A Speaker</option>
              </select>
            </div>
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
