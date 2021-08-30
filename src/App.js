import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Portfolio/Portfolio';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Adventure from './components/Adventure/Adventure';
import Booking from './components/Booking/Booking';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Video from './components/Video/Video';

function App() {   
  return (
    <Router>
      <Fragment>   
      {/* <Video /> */}
      {/* <Navbar /> */}
      <Banner />
      {/* <Search /> */}
      <Explore />  
       <Adventure />  
       <Booking />
       <Gallery />
       <Contact />  
       <Footer />   
      </Fragment>
    </Router>
  );
}

export default App;
