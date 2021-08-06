import React, { Component } from 'react';
import Particles from 'react-particles-js';
//import Particles from 'react-tsparticles';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
//import Particles from '../../../node_modules/react-particles-js/cjs/particles.js';
// import Particles from 'react-particles-js';
import Circle from '../../assets/Images/circle-dotted1.png';
import './Particle.css';
import './Gallery.css';

class Gallery extends Component {
  render() {
  return (
    // <div className="particle-js">
  <section style={{
    
  }} id="particles-js" className="section section-particle scrollspy">
 
   {/* <img style={{
      paddingTop: 50,
      paddingRight: 30,
    }}  className="circle" src={Circle} alt="rotatecircle" />   */}

   <div className="particle"> 
  
   <div className="textrotate">

   {/* <div className="circle"> */}

   {/* <div className="col s6">
   <img src={Circle} alt="rotatecircle" />
   </div> */}
 
    <div className="col s12">

 
    <h1 className="aboutus"><strong>About <span style={{
         'color': '#EC4215', 'borderBottom': '5px solid #EC4215'
       }}>us</span></strong></h1>

       <div className="newdivision">
         <div className="col s6">
         <p className="description"><strong>The word 'Vcana' means <span style={{
         'color': '#EC4215',
       }}>'Promise'.</span>
      

       <br /> 
         Vcana Global is a <span style={{
         'color': '#EC4215',
       }}>CANDID IT Consulting / <br />
         Digital Marketing.</span></strong></p>
         </div>
       </div>

       </div>

       <div className="row">    

      <div className="col s7 push-s5">
      <div className="mymission">
      <p className="innermission">
        Our Vision
      </p>

         <p>
           It is a long established fact that a reader will<br />
            be distracted by the readable content of a <br />
            page when looking at its layout. The point <br />
            of using Lorem Ipsum is that it has a more- <br />
            or-less normal distribution of letters, as<br />
            <br />
            <a href="#"><span style={{
            color: '#EC4215'
            }}>Read More <i class="fas fa-chevron-right" />
            <i class="fas fa-chevron-right" /></span></a>
        </p>
       
     
         {/* <li className="mylist"></li>
         <li className="mylist"></li>
         <li className="mylist"></li>
         <li className="mylist"></li>
         <li className="mylist"></li>
         <li className="mylist"></li> */}

         </div>
         </div>

         {/* <div className="meetingbutton">
       <a href="#" target="_blank" className="meeting"><b>Schedule a Meeting Now</b></a>
    </div>
      */}

    
    
      <div className="col s5 pull-s7">
      <div className="myvission">
      <p className="innermission">
        Our Mission
      </p>

         <p>
           It is a long established fact that a reader will <br />
            be distracted by the readable content of a <br />
            page when looking at its layout. The point <br />
            of using Lorem Ipsum is that it has a more- <br />
            or-less normal distribution of letters, as<br /><br />
           <a href="#"><span style={{
            color: '#EC4215'
            }}>Read More <i class="fas fa-chevron-right" />
            <i class="fas fa-chevron-right" /></span></a>
        </p>
      </div>
     
      {/* <h6 className="insideheading"><strong>One stop shop for all your <br /> <span style={{
         'color': '#EC4215'
       }}>technology needs</span></strong></h6> */}
     </div>
     </div>

     {/* <div className="row"> */}
     <div className="col s5 pull-s7">
      <div className="seemore">
      
      <a href="#" target="_blank" className="seebutton"><b>See More <i class="fas fa-arrow-right" /></b></a>
        
      </div>
     
      {/* <h6 className="insideheading"><strong>One stop shop for all your <br /> <span style={{
         'color': '#EC4215'
       }}>technology needs</span></strong></h6> */}
     </div>
     {/* </div> */}

       {/* <div className="mycontent">
         <div className="col s12">
         <div className="mission col s6">
         <p className="mymission">
            Our Mission <span style={{
               paddingLeft: 250,
               paddingBottom: 100,
            }}>Our Vission</span>
          </p> 

        
          <p className="innercontent">
            It is a long established fact that a reader will 
            be distracted by the readable content of a 
            page when looking at its layout. The point 
            of using Lorem Ipsum is that it has a more- 
            or-less normal distribution of letters, as<br />
            <span style={{}}>Read More</span>
          </p>
         </div>

       
         
         </div>

       </div> */}

        {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 70
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }, */}

  
     {/* style={{
       "color": "#fdbb2d",
     }} */}
  {/* />  */}

   
    </div>
  

    {/* <div className="textrotate">
    <div className="col s12">
    <h1 className="insideheading"><strong>About <span style={{
         'color': '#EC4215'
       }}>Us</span></strong></h1>
    </div>
    
    </div> */}

     </div> 
     
  </section>
  // </div>
  );
  }
  }
  
  export default Gallery;
  
    {/* <div className="row">
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?hotel" alt="hotel" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?restaurant" alt="restaurant" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?nature" alt="nature" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?beach" alt=" beach" />
      </div>
    </div>
  
    <div className="row">
      <div className="col s12 m3">
        <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?beaches" alt="beaches" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?travel" alt="travel" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?city" alt="city" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?adventure, travel" alt="adventure" />
      </div>
    </div>
  
    <div className="row">
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?sea" alt="sea" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?building" alt="building" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?tree" alt="tree" />
      </div>
      <div className="col s12 m3">
        <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?climbing" alt="climbing" />
      </div>
    </div> */}
 

// const Photo = ({ img, alt }) => {
//   return(
//     <div className="col s12 m3 marg">
//       <img className="materialboxed responsive-img" src={img} alt={alt} />
//     </div>
//   );
// }

// class PhotoGallery extends Component {
  
//   state = {
//     photo: [
//       {
//         id: 1,
//         img: "https://source.unsplash.com/1600x900/?hotel",
//         alt: "hotel"
//       },
//       {
//         id: 2,
//         img: "https://source.unsplash.com/1600x900/?restaurant",
//         alt: "restaurant"
//       },
//       {
//         id: 3,
//         img: "https://source.unsplash.com/1600x900/?nature",
//         alt: "nature"
//       },
//       {
//         id: 4,
//         img: "https://source.unsplash.com/1600x900/?beach",
//         alt: "beach"
//       },
//       {
//         id: 5,
//         img: "https://source.unsplash.com/1600x900/?travel",
//         alt: "travel"
//       },
//       {
//         id: 6,
//         img: "https://source.unsplash.com/1600x900/?city",
//         alt: "city"
//       },
//       {
//         id: 7,
//         img: "https://source.unsplash.com/1600x900/?adventure",
//         alt: "adventure"
//       },
//       {
//         id: 8,
//         img: "https://source.unsplash.com/1600x900/?sea",
//         alt: "sea"
//       },
//       {
//         id: 9,
//         img: "https://source.unsplash.com/1600x900/?building",
//         alt: "building"
//       },
//       {
//         id: 10,
//         img: "https://source.unsplash.com/1600x900/?climbing",
//         alt: "climbing"
//       },
//       {
//         id: 11,
//         img: "https://source.unsplash.com/1600x900/?forest",
//         alt: "forest"
//       },
//       {
//         id: 12,
//         img: "https://source.unsplash.com/1600x900/?resort",
//         alt: "resort"
//       }
//     ]
//   }

//   render() {
//     return (
//       <div className="row">
//         {this.state.photo.map(gal => (
//         <Photo 
//         key={gal.id} 
//         img={gal.img} 
//         alt={gal.alt}
//         />
//         ))}
//       </div>
//     );
//   }
// }





