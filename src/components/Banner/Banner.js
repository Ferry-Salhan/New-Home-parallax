import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
//import Imgone from '../../images/banner9.jpg';
//import Imgtwo from '../../images/banner6.jpg';
//import Imgthree from '../../images/banner7.jpg';
import SideImage from '../../assets/Images/main-banner.png';
import BackgroundVideo from '../../assets/Video/vcana video.mp4';
import './Banner.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class Banner extends Component {   
  render() {  
    return (
      <>
      <header id="home">
        <div className="hero">
        {/* <div className="row">
      <div className="col s12"> */}
        <video autoplay="" muted="" loop="" id="myVideo">
   	<source src={BackgroundVideo} type="video/mp4" />
    
  	</video> 
    <a href="#sec">
    <div class="scroll-down">
      </div>
      </a>
        </div>
      </header>
      
      
      <Navbar />
      
      <section className="slider" 
  //     style={{
  // backgroundImage: `url(https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png)})`,
  // backgroundRepeat: 'no-repeat',
  // width:'250px' 
  //     }} 
       id="home">

        <ul className="slides">

          <li>
             <img src={SideImage} 
             style={{'width': 400, 'height': 200}}
              alt="Vacation" /> 
            <div className="caption left-align" id="sec">
            {/* <div className="photo col-s6">
              <img style={{'width': 400, 'height': 200}} src={SideImage} alt="photo"></img>
              </div> */}
              <h2 style={{
                 'color': '#C4C3EB',
                 'font-size': '24px',
                 'font-family': "'Raleway', sans-serif"
              }}>WELCOME TO VCANA GLOBAL</h2>
             
              <h1>Grow Your Business 
           <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
  
          </h1>
              {/* <h5 style={{color: 'red'}} 
              // className="light grey-text text-lighten-3 hide-on-small-only"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Veniam non illo earum cumque id est!</h5> */}
              {/* <Link to="#" className="btn btn-large purple">Learn More</Link> */}
              <div class="elementor">
              <a href="#" target="_blank" class="detail"><b>Read More</b> <i class="fas fa-arrow-right" /></a>
              </div>
            </div>
          </li>

          <li>
             <img src={SideImage} 
             style={{'width': 400, 'height': 200}}
              alt="Vacation" /> 
            <div className="caption left-align">
            {/* <div className="photo col-s6">
              <img style={{'width': 400, 'height': 200}} src={SideImage} alt="photo"></img>
              </div> */}
              <h2 style={{
                 'color': '#C4C3EB',
                 'font-size': '24px',
                 'font-family': "'Raleway', sans-serif"
              }}>WELCOME TO VCANA GLOBAL</h2>
             
              <h1>Grow Your Business 
           <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
              {/* <h5 style={{color: 'red'}} 
              // className="light grey-text text-lighten-3 hide-on-small-only"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Veniam non illo earum cumque id est!</h5> */}
              {/* <Link to="#" className="btn btn-large purple">Learn More</Link> */}
              <div class="elementor">
              <a href="#" target="_blank" class="detail"><b>Read More</b> <i class="fas fa-arrow-right" /></a>
              </div>
            </div>
          </li>

          <li>
             <img src={SideImage} 
             style={{'width': 400, 'height': 200}}
              alt="Vacation" /> 
            <div className="caption left-align">
            {/* <div className="photo col-s6">
              <img style={{'width': 400, 'height': 200}} src={SideImage} alt="photo"></img>
              </div> */}
              <h2 style={{
                 'color': '#C4C3EB',
                 'font-size': '24px',
                 'font-family': "'Raleway', sans-serif"
              }}>WELCOME TO VCANA GLOBAL</h2>
             
              <h1>Grow Your Business 
           <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
              {/* <h5 style={{color: 'red'}} 
              // className="light grey-text text-lighten-3 hide-on-small-only"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Veniam non illo earum cumque id est!</h5> */}
              {/* <Link to="#" className="btn btn-large purple">Learn More</Link> */}
              <div class="elementor">
              <a href="#" target="_blank" class="detail"><b>Read More</b> <i class="fas fa-arrow-right" /></a>
              </div>
            </div>
          </li>
          </ul>

          {/* <input type="radio" name="r" id="r1" checked/>
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />

          <div className="slidershow">
            <label for="" className="bar"></label>
            <label for="" className="bar"></label>
            <label for="" className="bar">third</label>
          </div> */}
        </section>

          {/* <ol class="carousel-indicators" style={{
         'background': '#ccebff',
       }}>

    <li data-target="#carouselExampleIndicators" data-slide-to="0"  style={{
    'background-color': '#1B48A3',
    // 'list-style-type': 'square',
    'padding-left': 10,
    'height': 5,
    'width': 30
  }} class="active"></li>
    <li data-target="#carouselExampleIndicators"  style={{
    'background-color': '#1B48A3',
    // 'list-style-type': 'square',
    'height': 5,
    'width': 30
  }} data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators"  style={{
    'background-color': '#1B48A3',
    // 'list-style-type': 'square',
    'height': 5,
    'width': 30
  }} data-slide-to="2"></li>
  </ol> */}

      
        {/* <div id="home" className="carousel carousel-slider center">
          <div className="carousel-fixed-item center">
            <Link className="btn waves-effect white grey-text darken-text-2">button</Link>
          </div>
          <div className="carousel-item red white-text" to="#one!">
            <h2>First Panel</h2>
            <p className="white-text">This is your first panel</p>
          </div>
          <div className="carousel-item amber white-text" to="#two!">
            <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p>
          </div>
          <div className="carousel-item green white-text" to="#three!">
            <h2>Third Panel</h2>
            <p className="white-text">This is your third panel</p>
          </div>
          <div className="carousel-item blue white-text" to="#four!">
            <h2>Fourth Panel</h2>
            <p className="white-text">This is your fourth panel</p>
          </div>
        </div> */}
    
      </>
    );
  }
}

export default Banner;


//  <li>
//  <img src={Imgtwo} alt="Budgets" /> 
// <div className="caption left-align">
//   <h2 style={{color: 'red'}}>Book For Your Trip</h2>
//   <h5 style={{color: 'red'}} 
//    className="light grey-text text-lighten-3 hide-on-small-only"
//   >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
//   Veniam non illo earum cumque id est!</h5>
//   <Link to="#" className="btn btn-large purple">Learn More</Link>
// </div>
// </li>

// <li>
//  <img src={Imgthree} alt="Getaways" /> 
// <div className="caption left-align">
//   <h2 style={{color: 'red'}}>Relax And Enjoy</h2>
//   <h5 style={{color: 'red'}} 
//    className="light grey-text text-lighten-3 hide-on-small-only"
//   >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Veniam non illo earum cumque id est!</h5>
//   <Link to="#" className="btn btn-large purple">Learn More</Link>
// </div>
// </li> 