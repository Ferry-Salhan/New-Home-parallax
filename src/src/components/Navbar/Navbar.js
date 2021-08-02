import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css";


 // hide-on-med-and-down
const SmoothScroll = () => {
  return (
    <nav id="sec-2">

      <div className="nav-wrapper">
        <ul className="right">
        <li>
          <a href="#home" style={{
          color: '#ff3300'
        }}>Home</a>
          </li>
          <li>
          <a href="#about">About Us</a>
          </li>
          <li>
          <a href="#services">Services
          <i class="fa fa-caret-down"></i></a>
          {/* <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
          {/* <li>
          <a href="#"><strong style={{fontWeight: 'bold'}}>Web Design & Development</strong></a>
          </li> */}
          </li>
          <li>
          <a href="#contact">Contact Us</a>
          </li>
          
          <li>
          <a href="#blog">Blog</a>
          </li>   
         
        </ul>
      </div>
      </nav>
 
    /* <div className="navbar-fixed">
        <nav style={{background: 'background: #ccebff;'}}
        className="purple"
        >
          <div className="container">
            <div className="nav-wrapper indigo">
              <AnchorLink href="!#" class="brand-logo">
                AirPnP   
              </AnchorLink>
              <AnchorLink
                href="!#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i class="material-icons">menu</i>
              </AnchorLink>
              <ul class="right hide-on-med-and-down">
                <li>
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#search">Search</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#explore">Explore</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#adventure">Adventures</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#gallery">Gallery</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */
      /* <ul class="sidenav" id="mobile-demo"> */
        /* <li>
            <div className="user-view">
              <div className="background">
                  <img src={Imgbackground} alt="ocean" />
              </div>
              <AnchorLink href="#user"><img className="circle" src={Imgperson} alt="person" /></AnchorLink>
              <AnchorLink href="#name"><span className="white-text name">John Doe</span></AnchorLink>
              <AnchorLink href="#email"><span className="white-text email">jdandturk@gmail.com</span></AnchorLink>
            </div>
          </li> */
        /* <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Search</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Explore</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#adventure">Adventures</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#gallery">Gallery</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul> */
  
  );
};

class Navbar extends Component {
  render() {
    return (
      <section>   
        <SmoothScroll />
      </section>
    );
  }
}

export default Navbar;
