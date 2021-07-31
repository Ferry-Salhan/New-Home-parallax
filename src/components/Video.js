import React from 'react';
import '../../src/App.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideo from '../assets/Video/vcana video.mp4';
import SideImage from '../assets/Images/main-banner.png';

const Home = () => {

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
        <video autoplay="" muted="" loop="" id="myVideo">
   	<source src={BackgroundVideo} type="video/mp4" />
    
  	</video> 
    <a href="#sec-2">
    <div class="scroll-down">
      </div>
      </a>
          {/* <div className="overlay"></div>
           <h1>Home</h1> 
            */}
        </div>
      </header>

      <div className="sticky-wrapper" id="sec-2">
       {/* <nav>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About Us</a></li>
           <li><a href="#">Services</a></li>
           <li><a href="#">Contact Us</a></li>
           <li><a href="#">Blog</a></li>
         </ul>
       </nav> */}


       {/* NAVBAR */}
       <div class="navbar">
        <a href="#blog">Blog</a>
  <a href="#contact">Contact Us</a>
  <div class="dropdown">
    <button class="dropbtn">Services 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#"><strong>Web Design & Development</strong></a>
    </div>
  </div> 
        
        <a href="#about">About Us</a>
         <a class="active" href="#home">Home</a>
     </div>

     {/* <div class="photo"> */}
      {/* </div> */}

     <div class="heading">

        <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo">
        </img>
        <h1>Grow Your Business     
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
          <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
         

      <br /><br />
      <div class="elementor">

{/* <			<a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span class="elementor-button-text">Read More</span>
		</span>
					</a>  */}

        <a href="#" target="_blank" class="detail"><b>Read More</b> <i class="fas fa-arrow-right"></i></a>
      </div>
      </div>
      </div>
     </div>

     {/* SLIDESHOW SECTION */}
      {/* <section id="item1">
      <h1>Other Section</h1>
      </section> */}



      {/* http://adfero.github.io/jScrollability/  
      https://www.hongkiat.com/blog/scrolling-effects-js-libraries/
      
      (text animation) */}

     {/* TEXT ANIMATION */}
     <div className="banner1">
     <section className="slidershow">
         
         <Carousel interval={1000}>
           <Carousel.Item>
           <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo" />
        </div>
        <h1>Grow Your Business     
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
           <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
      <br /><br />
      
           </Carousel.Item>

           <Carousel.Item>
           <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo" />
        <h1>Grow Your Business     
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
           <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
      <br /><br />
      </div>
           </Carousel.Item>

           <Carousel.Item>
           <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        <div>
        <img style={{'width': 400, 'height': 200, 'padding-left':500}} src={SideImage} alt="photo" />
        <h1>Grow Your Business     
        {/* <img style={{'width': 400, 'height': 200, 'padding-left':500}} src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
        </img> */}
           <br />
          with an <span style={{'color': '#EC4215', 'font-size': '60px'}}>Engaging<br />
         
          Website</span>
           
          </h1>
      <br /><br />
      </div>
           </Carousel.Item>

         </Carousel>

      </section>
     </div>
      
      </>
    );
}

export default Home;

      {/* <div className="slides">
      <input type="radio" name="r" id="r1" checked />
      <input type="radio" name="r" id="r2" />
      <input type="radio" name="r" id="r3"  />

      <div className="slide s1">
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

      </div> */}


      {/* <div className="slide s2">
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

      </div> */}


      {/* <div className="slide s3">
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

      </div> */}
      {/* <div className="navigation">
    <label for="r1" className="bar"></label>
    <label for="r2" className="bar"></label>
    <label for="r3" className="bar"></label>

    </div>
    </div> */}

     


// import React from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import ParallaxImage from './SlideShow';
// import img1 from '../Video/final1.webm';

// function Video() {
//   return(
//    <>
//    <ParallaxProvider>
     
//       <ParallaxImage imgsrc={img1} height="500px" opacity=".5">  
//       <h1 style={{position: 'absolute'}}>Home</h1>
//       </ParallaxImage>
//       <p>
//           This is the heading
//         </p>

//         <ParallaxImage imgsrc={img1} height="500px" opacity=".2">  
//         <h1 style={{position: 'absolute'}}>Home</h1>
//       </ParallaxImage>
//       <p>
//           This is the heading
//         </p>

//    </ParallaxProvider>
    
//    </>
//   );
// }

// export default Video;

// import React from 'react';
// //import './Home.css';
// import '../../src/App.css';


// function Video() {
//   return(
// <>
//   <div class="section">
//   {/* <nav></nav> */}
// <section id="home">
// <video autoplay="" muted="" loop="" id="myVideo">
//  	<source src="http://vcanaglobal.ga/vcana-new/wp-content/uploads/2021/04/final1.webm" type="video/mp4" />
//  	</video>
// </section>

// <section id="about">
// <div class="navbar">
//         <a href="#blog">Blog</a>
//   <a href="#contact">Contact Us</a>
//   <div class="dropdown">
//     <button class="dropbtn">Services 
//       <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-content">
//       <a href="#"><strong>Web Design & Development</strong></a>
//     </div>
//   </div> 
        
//         <a href="#about">About Us</a>
//          <a class="active" href="#home">Home</a>
// </div>

// {/* <div class="photo">
//         <img src="https://vcanaglobal.ga/vcana-new/wp-content/uploads/revslider/slider-1/main-banner.png" alt="photo">
//         </img>
//       </div> */}

//       <div class="heading">
//         <p class="greeting">WELCOME TO VCANA GLOBAL</p>
        
//         <br />
       
//         <br />
        
//         <h1>Grow Your Business
//           <br />
//           with an <span style={{'color': '#EC4215'
//            , 'font-size': '60px'}}>Engaging<br />
         
//           Website</span>
           
//           </h1>
         
//       </div>
      
//       <br /><br />
//       {/* <div class="elementor"> */}
// {/* <!-- 			<a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
// 						<span class="elementor-button-text">Read More</span>
// 		</span>
// 					</a> --> */}
//         <a href="#" target="_blank" class="detail"><b>Read More</b> <i class="fas fa-arrow-right"></i></a>
//       {/* </div> */}
      
// </section>


// <section id="portfolio"></section>
// <section id="contact"></section>
// <footer></footer>
//   </div>
//   </>
//   );
  
// }

// export default Video;

// import React from 'react';
// //import { Player } from "video-react";
// //import logo from './logo.svg';
// import Parallax from 'react-rellax';

// import "../App.css";

// function Video() {
//   return (  
//       <>   
//       <div className="container">
//   <section className="background">
//     <div className="content-wrapper">
//       <video autoplay="" muted="" loop="" id="myVideo">
// 	<source src="http://vcanaglobal.ga/vcana-new/wp-content/uploads/2021/04/final1.webm" type="video/mp4" />
// 	</video>
//        <p className="content-title">Full Page Parallax Effect</p>
//       <p className="content-subtitle">Scroll down and up to see the effect!</p> 
//     </div>
//   </section>
//   <section className="background">
//     <div className="content-wrapper">
//       <p className="content-title">Cras lacinia non eros nec semper.</p>
//       <p className="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
//     </div>
//   </section>
//   <section classN="background">
//     <div className="content-wrapper">
//       <p className="content-title">Etiam consequat lectus.</p>
//       <p className="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
//     </div>
//   </section>
// </div>


//     {/* <div className="myvideo">


//       <section>
//       <header className="App-header">
//       <Parallax speed ={ -10 }>
     
//       <video autoplay loop muted className="myVideo">
//     <source src="http://vcanaglobal.ga/vcana-new/wp-content/uploads/2021/04/final1.webm" type="video/mp4" />
//      </video>
//      </Parallax>
//      </header>

//       </section>
       
//     </div>
//     <div className="red-section">
//     <h2>SlideShow</h2>
//     </div> */}
//     </>
//   );
// }

// export default Video;





// {/* <div class="container body-content">
        



// <div class="container">


//  <div class="row justify-content-start" 
//  style={{
//      'padding-top':'10px'}}
//      >
// <label></label>



// </div>
// <div class="row justify-content-start" style={{
//  'padding-top':'10px'
//  }}>

// <div class="col" style={{
//  'padding-top':'10px'
//  }}>
// <button class="btn btn-primary"></button>


// </div>
// <div class="col" style={{'padding-top':'10px'}}>
// <a href=""></a>


// </div>
// </div>
// <div class="row justify-content-start" style={{
//  'padding-top':'10px'}}>
// <button class="btn btn-primary"></button>


// </div>
// <div class="row justify-content-center" style=
// {{'padding-top':'10px'}}
// >
// <label><input type="radio" /> </label>


// </div>
// <div class="row justify-content-center" style={{"padding-top":"10px"}}>
// <a href="#" target="_blank">React</a>


// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <button class="btn btn-primary"></button>


// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>


// <img alt="Image html" width="90%" height="90%" style={{"max-height":"500px"
// ,"max-width":"500px"}}
// src="https://sketch2code.azurewebsites.net/Content/img/fake_img.svg" />


// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <h1></h1>


// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <label></label>



// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <button class="btn btn-primary"></button>


// </div>
// <div class="row justify-content-start" style={{"padding-top":"10px"}}>

// <div class="col" style={{"padding-top":"10px"}}>
// <button class="btn btn-primary"></button>


// </div>
// <div class="col" style={{"padding-top":"10px"}}>
// <button class="btn btn-primary"></button>


// </div>
// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <a href="#" target="_blank">JS</a>


// </div>
// <div class="row justify-content-center" style={{"padding-top":"10px"}}>
// <button class="btn btn-primary"></button>


// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <a href="#" target="_blank">CSS</a>


// </div>
// <div class="row justify-content-center" style={{"padding-top":"10px"}}>
// <p class="text-black-50">
// Lorem ipsum dolor sit amet, consectetur adipiscing elit
// <br />
// sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// <br />
// Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
// </p>
// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <a href="#" target="_blank">HTML</a>


// </div>
// <div class="row justify-content-end" style={{"padding-top":"10px"}}>
// <label></label>



// </div>
// <div class="row justify-content-start" style={{"padding-top":"10px"}}>

// <div class="col" style={{"padding-top":"10px"}}>
// <label></label>



// </div>
// <div class="col" style={{"padding-top":"10px"}}>
// <button class="btn btn-primary"></button>


// </div>
// </div>


// </div>
// </div> */}