import React, { Component } from 'react';
import './Explore.css';
import Animation from '../../assets/Images/Animation.gif';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

// section-icons grey lighten-4 
class Explore extends Component {
  render() {
    return (
      <section id="explore" className="section center"
      >
        <div className="container">  
          <div className="row">
          <h1>Work <span style={{'color': '#EC4215', 'font-size': '60px'}}>Flow
         </span>
           
          </h1>
          {/* <h4 className="center">
              <span className="purple-text darken-1">Explore</span> AirPnP</h4> */}
            <div className="col s12 m4">
              <div className="card-panel">
                {/* <i className="material-icons medium purple-text">hotel</i> */}
                <h3>
                  <span style={{'color': '#1B48A3', 'font-size': '50px'}}>
                    02
                  </span>
                </h3>
                <h4><span style={{'color': '#EC4215', 'font-size': '30px'}}>Design</span></h4>
                <p className="text">Our team of designers build <strong style={{fontWeight: 'bold'}}>UNIQUE &amp; TAILOR MADE</strong> innovative web designs, specific to your business needs.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                {/* <i class="material-icons medium purple-text">restaurant</i> */}
                <h3>
                  <span style={{'color': '#1B48A3', 'font-size': '50px'}}>
                    04
                  </span>
                </h3>
                <h4><span style={{'color': '#EC4215', 'font-size': '30px'}}>Quality Check</span></h4>
                <p className="text">Your direct input is <strong style={{fontWeight: 'bold'}}>CRITICAL</strong>.We send the draft for revision to make sure that website is <strong style={{fontWeight: 'bold'}}>BUG</strong> free and represents your <strong style={{fontWeight: 'bold'}}>BRAND</strong> in an awesome way.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                {/* <i className="material-icons medium purple-text">local_cafe</i> */}
                <h3>
                  <span style={{'color': '#1B48A3', 'font-size': '50px'}}>
                    06
                  </span>
                </h3>
                <h4><span style={{'color': '#EC4215', 'font-size': '30px'}}>Maintain</span></h4>
                <p className="text">What else? We take our after sales service very <strong style={{fontWeight: 'bold'}}>SERIOUSLY</strong> by giving 3 months <strong style={{fontWeight: 'bold'}}>FREE</strong> maintenance on every project we deliver.</p>
              </div>
            </div>
            

            {/* <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">shopping_basket</i>
                <h4>Shopping</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div> */}

          </div>
          <div className="row">
          <div class="col s12"> 
           <img src={Animation} alt="animation" className="animation" 
             style={{
               'float': 'right'
             }}
           />
            </div> 
            </div>
          {/* <div class="row"> */}
    {/* <div class="col s12"><p>s12</p></div> */}
    {/* <div class="col s12 m4 l2"><p></p></div>
    <div class="col s12 m4 l8">
      <img src={Animation} alt="animation" style={{
        'height': 400,
        'width': 800,
      }}
       />
    </div>
    <div class="col s12 m4 l2"><p></p></div> */}
  {/* </div> */}
  {/* <div class="row">
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
  </div> */}
          
        </div>
      </section>
    );
  }
}

export default Explore;