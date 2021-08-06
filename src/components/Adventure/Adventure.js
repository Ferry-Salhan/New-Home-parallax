import React, { useState } from 'react';
import SideImage from '../../assets/Images/main-banner.png';
import Logo from '../../assets/Images/services.png';
import { questions } from './Data';
import './Adventure.css';

const Services = () => {
  const [data, setData] = useState(questions);

  return(
    <section className="services">
      <div className="container">
      <div className="row">

      <div className="col s7 push-s5">
      <div className="accordion">
         <ul>
           <li>
           <h5>01<span className="animate" 
            style={{
               'font-size': 25, 
              //  'color': '#2D2D2D',
                 'text-indent': 10,
          //        'letter-spacing': 2, 
          //        '-webkit-text-stroke-width': 1,
          //        'webkit-text-stroke-color': '#2D2D2D',
          //        '-webkit-text-stroke': 1,
          //        '-webkit-text-fill-color': '#2D2D2D',
          //         paddingBootom: '2em'
              }}
             >&emsp; WEB DESIGN & DEVELOPMENT</span></h5>
           </li>
           
           <hr className="service"></hr><br />

           <li>
             <h5>02 <span className="animate"  style={{
               'font-size': 25, 'color': '#2D2D2D',
              
             }}>&emsp; DIGITAL MARKETING</span></h5>
           </li>
           
           <hr className="service"></hr><br />
      
           <li>
             <h5>03 <span className="animate"  style={{
               'font-size': 25, 'color': '#2D2D2D',
               
             }}
             >&emsp; MOBILE & APP DEVELOPMENT</span></h5>
           </li>
           
           <hr className="service"></hr><br />
            
           <li>
             <h5>04 <span className="animate"  style={{
               'font-size': 25, 'color': '#2D2D2D',
                
             }}>&emsp; E-COMMERCE DEVELOPMENT</span></h5>
           </li>
           <hr className="service"></hr><br />

           <li>
             <h5>05 <span className="animate"  style={{
               'font-size': 25, 'color': '#2D2D2D', 
               
             }}>&emsp; DIGITAL MARKETING</span></h5>
           </li>
           <hr className="service"></hr><br />

           <li>
             <h5>06 <span className="animate"  style={{
               'font-size': 25, 'color': '#2D2D2D', 
               
             }}>&emsp; OUTSOURCING SERVICES</span></h5>
           </li>
           <hr className="service"></hr><br />
         </ul>



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
      <ul>
      <li>
      <span className="flow-text">
     
      <h3 style={{
        'color': '#004194'
      }}>Our <br /><span style={{'color': '#EC4215', 'font-size': '60px'}}>Services</span></h3>
      </span><br /></li>
      <li>
      <div className="servicebutton">
      <button className="mybutton"><a href="#" target="_blank" className="buynow"> <i class="fab fa-paypal" /> Buy Now</a></button>
    </div>
    </li>
    <br />
    <li>
    <hr className="solid"></hr>
    </li>
    <br />
    <li>
    <div className="text">
     <p>Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, sed do eiusmod 
     tempor incididunt ut labore et dolore magna aliqua. 
     </p>
     </div>
     </li>
     
     <li>
     <br /><img src={Logo} 
              style={{
                'width': 400, 
                'height': 300, 
                'float': 'right', 
                'margin': 0,
                // 'paddingBottom': 100,
                }}
              alt="Vacation" /> 
     </li>
   

    {/* <div className="logo">
     <img src={SideImage} 
             style={{'width': 600, 'height': 400}}
              alt="Vacation" />  
    </div> */}

      {/* <div className="col s5 pull-s7">
      <div className="container"></div>
      </div> 
      <div className="col s5 pull-s7">
      <div className="container"></div>
      </div>  
     
      <div className="col s5 pull-s7">
      <div className="container"></div>
      </div>

      <div className="col s5 pull-s7">
      <div className="container"></div>
      </div>

      
      <div className="col s5 pull-s7">
      <div className="container"></div>
      </div>
     */}
  
    {/* <div className="heading">
      <h6><br /><br /><br /><br /><br /><br /><br /><br />One stop shop for all your <br /> <span style={{
        'color': '#EC4215'
      }}>technology needs.</span></h6>
    </div>
    */}

    </ul>
      </div>
  

      {/* <span class="flow-text">
      <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
      </span> */}


    </div>
      </div>
    </section>
  );
}

export default Services;
// import React, { Component } from 'react';
// import Resort1 from '../../images/banner4.jpg';
// import Resort2 from '../../images/banner5.jpg';
// import Resort3 from '../../images/banner8.jpg';
// import { HashLink as Link } from 'react-router-hash-link';

// class Popular extends Component {
//   render() {
//     return (
//       <section id="adventure" className="section section-popular scrollspy">
//         <div className="container">
//           <div className="row">
//             <h4 className="center">
//               <span className="purple-text darken-1">AirPnP</span> Adventures</h4>
//             <div className="col s12 m4">
//               <div className="card">
//                 <div className="card-image">
//                   <img src={Resort1} alt="" />
//                   <span className="card-title">Cuba</span>
//                   <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link>
//                 </div>
//                 <div className="card-content">
//                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
//                     delectus?
//                   </p>
//                 </div>
//                 <div class="card-reveal">
//                   <span class="card-title grey-text text-darken-4">Cuba<i class="material-icons right">close</i></span>
//                   <p>Here is some more information about this trip</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col s12 m4">
//               <div className="card">
//                 <div className="card-image">
//                   <img src={Resort2} alt="" />
//                   <span className="card-title">Halong Bay</span>
//                   <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
//                 </div>
//                 <div className="card-content">
//                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
//                     delectus?
//                   </p>
//                 </div>
//                 <div class="card-reveal">
//                   <span class="card-title grey-text text-darken-4">Halong Bay<i class="material-icons right">close</i></span>
//                   <p>Here is some more information about this trip</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col s12 m4">
//               <div className="card">
//                 <div className="card-image">
//                   <img src={Resort3} alt="" />
//                   <span className="card-title">Costa Rica</span>
//                   <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
//                 </div>
//                 <div className="card-content">
//                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
//                     delectus?
//                   </p>
//                 </div>
//                 <div class="card-reveal">
//                   <span class="card-title grey-text text-darken-4">Costa Rica<i class="material-icons right">close</i></span>
//                   <p>Here is some more information about this trip</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="row">
//             <div className="col s12 center">
//               <a href="#contact" className="btn btn-large grey darken-3">
//                 <i className="material-icons left">send</i> Contact For Booking
//               </a>
//             </div>
//           </div> */}
//         </div>
//       </section>
//     );
//   }
// }

// export default Popular;