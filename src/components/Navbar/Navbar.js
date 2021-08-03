// import React , { useState } from 'react';
// import { Link } from 'react-router-dom';
// import  Dropdown from './Dropdown';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => {
//     setClick(!click);   
//   }   

//   const closeMobileMenu = () => {
//     setClick(false);
//   }

//   return(
//     <>
//       <nav className="navbar">
//        <Link to='/' className="navbar-logo">Epic</Link>
//        <div className="menu-icon" onClick={handleClick}>
//          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//        </div>
//        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//          <li className='nav-item'>
//            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
//              Home
//            </Link>
//          </li>

//          <li className='nav-item'>
//            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
//              About Us
//            </Link>
//          </li>

//          <li className='nav-item'>
//            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
//              Services <i className="fas fa-sort-down" />
//            </Link>
//            {
//              dropdown && <Dropdown />
//            }
//          </li>

//          <li className='nav-item'>
//            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
//              Contact Us
//            </Link>
//          </li>

//          <li className='nav-item'>
//            <Link to="/blog" className='nav-links' onClick={closeMobileMenu}>
//             Blog
//            </Link>
//          </li>
//        </ul>
//       </nav>
//     </>  
//   );
// }

// export default Navbar;



import React, { Component } from 'react';
//import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css";


 // hide-on-med-and-down
const SmoothScroll = () => {
  return (
    <nav style={{
      'background-color': '#ccebff',
    }}
    // id="sec-2"
    >

<div className="navbar">
        <a href="#blog">Blog</a>
  <a href="#contact">Contact Us</a>
        
  <div className="dropdown">
    <button className="dropbtn">Services <i className="fas fa-sort-down" />
    </button>
     <div className="dropdown-content"> 
     <ul>
     <li>
      <a href="#" className="dropdown-content">Web Design & Development</a>
      </li>
      </ul>
    </div> 
  </div> 
        
        <a href="#about">About Us</a>
         <a class="active" href="#home">Home</a>
</div>
    </nav>


      /* <div className="menu"
      // className="nav-wrapper"
      >
        <ul className="right">
        <li>
          <a href="#home" style={{
          color: '#ff3300'
        }}>Home</a>
          </li>
          <li>
          <a href="#about">About Us</a>
          </li> */

          /* <li>
          <a href="#services">Services
          <i className="fas fa-sort-down" /></a>
          </li> */
          
          /* <li className="dropdown">
    <a className="dropbtn">Services <i className="fas fa-sort-down" /></a>
     <div className="dropdown-content"> 
      <a href="#" className="dropdown-content"><strong>Web Design & Development</strong></a>
     </div> 
  </li>  */
        
          /* <li class="dropdown">
			<a class="dropbtn" href="javascript:void(0)">Products</a>
			<div class="dropdown-content">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
			</div>
		</li> */

          /* <div>
            <a href="#design">Web Design & Development</a>
          </div> */
          /* <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */
          /* <li>
          <a href="#"><strong style={{fontWeight: 'bold'}}>Web Design & Development</strong></a>
          </li> */
/*         
          <li>
          <a href="#contact">Contact Us</a>
          </li>
          
          <li>
          <a href="#blog">Blog</a>
          </li>   
         
        </ul>
      </div> */

 
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
