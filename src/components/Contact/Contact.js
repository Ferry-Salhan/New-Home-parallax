import React, { Component } from 'react';
import './Contact.css';
import InsideImage from '../../assets/Images/myimage.png';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        {/* <div className="container"> */}
          <div className="row">
            <div className="col s12">
               <h2 className="mycompany" style={{
                 color: '#004194'
               }}>Why <span style={{
                'color': '#EC4215',
                'borderBottom': '5px solid #EC4215',
               }}>Choose Us?</span></h2>
               <p className="language">Far far away, behind the word mountains. Far from the countries
               Vokalia and Consonantia. there live the blind<br /> texts.
               Separated they live in Bookm arksgrove right at the coast of the
               Semantics.<br /> A large language ocean. A small river named.</p>
            </div>
            </div>


            <div className="row">    

      <div className="col s7 push-s5">
       <div className="companyservice">
       <div className="anotherinner">
              <div className="insideimage">
              <div className="col s12 m4 l3">
               <img style={{
                 float: 'left',
                 margin: 0
               }} src={InsideImage} alt="insideimage" />
               
               </div>
              </div>

              <div className="insidetexting">
              <div className="col s12 m8 l9">
              <p className="texting">
               Far far away, behind the word mountains. Far from the <br /> <br />
               countries Vokalia and Consonantia. there live the <br /> <br />
               blind texts. Separated they live in Bookm arksgrove <br /><br /> right at the coast of the
               Semantics. A large language <br /><br /> ocean. A small river named.
               Far far away, behind the <br /><br /> word mountains. Far from the 
               countries Vokalia and <br /><br /> Consonantia. there live the 
               blind texts. Separated they <br /><br /> live in Bookm arksgrove 
               right at the coast of the <br /><br />
               Semantics. A large language ocean.
              </p>
              </div>
              </div>
             </div>


     </div>
    </div>

         <div className="col s5 pull-s7">
              <div className="anotherservice">
   
              <ul className="innerservice">
      <li>
        <p><span style={{
          color: '#073694',
        }}><i class="fas fa-chevron-right" />
      <i class="fas fa-chevron-right" /> A highly trusted Company to Partner with</span></p>
      </li>
       <br />

      <li>
        <p> <i class="fas fa-chevron-right" />
      <i class="fas fa-chevron-right" /> Distinctly reliability, which make us "Better than the best"</p>
      </li><br />

      <li>
        <p> <i class="fas fa-chevron-right" />
      <i class="fas fa-chevron-right" /> Industry specific experience</p>
      </li><br />

      <li>
        <p> <i class="fas fa-chevron-right" />
      <i class="fas fa-chevron-right" /> Real time communication and collabration</p>
      </li><br />

      <li>
        <p> <i class="fas fa-chevron-right" />
      <i class="fas fa-chevron-right" /> On time and within budget</p>
      </li><br />

      <li>
        <p> <i class="fas fa-chevron-right" />
      <i class="fas fa-chevron-right" /> Company with a proven track record</p>
      </li><br />
      </ul>

 
   </div>

     </div>
    </div>

            {/* <div className="row">
             
             <div className="companyservice">
             <div className="col s7 push-s5">
               <h2>
                 Accordion
               </h2>
              </div> */}

              {/* <div className="anotherservice">
              <div className="col s5 push-s7">
                  <h2>
                  image with text
                  </h2>
              </div>
              </div> */}
             {/* </div>
             </div>  */}

        
        {/* </div> */}
      </section>
    );
  }
}

export default Contact;