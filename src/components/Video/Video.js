import React from 'react';
//import '../../src/App.css';
//import { Carousel } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideo from '../../assets/Video/vcana video.mp4';
//import SideImage from '../assets/Images/main-banner.png';
//import Navbar from './Home';
//import Parallax from './SlideShow';

const Video = () => {  

    //  $(window).scroll(function(){
    //    var heroHeight = $('header').height();
    //    var yPosition = $(document).scrollTop();
    //    if(yPosition <= heroHeight){
    //      var effectFactor = yPosition / heroHeight;
    //      var rotation = effectFactor * (Math.PI / 2 - Math.asin ((heroHeight - yPosition) / heroHeight ));
    //      $('.hero').css({
    //        '-webkit-transform': 'rotateX('+rotation+'rad)',
    //        'transform': 'rotateX('+rotation+'rad)',
    //      })
    //      .find('.overlay').css('opacity', effectFactor);
    //    }
    //  })


    return(
      
      <>
      {/* VIDEO SECTION */}
      <header id="home">
        <div className="hero">
        {/* <div className="row">
      <div className="col s12"> */}
        <video autoplay="" muted="" loop="" id="myVideo">
   	<source src={BackgroundVideo} type="video/mp4" />
    
  	</video> 
    <a href="#sec-2">
    <div class="scroll-down">
      </div>
      </a>
        </div>
      </header>

      {/* <div className="sticky-wrapper" id="sec-2"> */}
       {/* <nav>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About Us</a></li>
           <li><a href="#">Services</a></li>
           <li><a href="#">Contact Us</a></li>
           <li><a href="#">Blog</a></li>
         </ul>
       </nav> */}

        {/* <Navbar /> */}
       {/* NAVBAR */}
       {/* <div class="navbar">
        <a href="#blog">Blog</a>
  <a href="#contact">Contact Us</a>
  <div class="dropdown">
    <button class="dropbtn">Services 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#"><strong>Web Design & Development</strong></a>
    </div>
  </div>  */}
        
        {/* <a href="#about">About Us</a>
         <a class="active" href="#home">Home</a>
     </div> */}

     {/* <div class="photo"> */}
      {/* </div> */}

     {/* <div class="heading">

        <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo">
        </img>
        <h1>Grow Your Business      */}
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
          <br />
          {/* with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
         

      <br /><br />
      <div class="elementor"> */}

{/* <			<a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span class="elementor-button-text">Read More</span>
		</span>
					</a>  */}

        {/* <a href="#" target="_blank" class="detail"><b>Read More</b> <i class="fas fa-arrow-right"></i></a>
      </div>
      </div>
      </div>
     </div> */}

     {/* SLIDESHOW SECTION */}
      {/* <section id="item1">
      <h1>Other Section</h1>
      </section> */}



      {/* http://adfero.github.io/jScrollability/  
      https://www.hongkiat.com/blog/scrolling-effects-js-libraries/
      
      (text animation) */}

     {/* TEXT ANIMATION */}
     {/* <div className="banner1">
     <section className="slidershow">
         
         <Carousel interval={1000}>
           <Carousel.Item>
           <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo" />
        </div>
        <h1>Grow Your Business      */}
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
           <br />
          {/* with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
      <br /><br />
      
           </Carousel.Item>

           <Carousel.Item>
           <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo" />
        <h1>Grow Your Business      */}
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
           <br />
          {/* with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
      <br /><br />
      </div>
           </Carousel.Item>

           <Carousel.Item>
           <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo" />
        <h1>Grow Your Business      */}
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
           {/* <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
      <br /><br />
      </div>
           </Carousel.Item>

         </Carousel>

      </section> */}
     {/* </div> */}
     {/* <Parallax /> */}
      
      </>
    );
}

export default Video;