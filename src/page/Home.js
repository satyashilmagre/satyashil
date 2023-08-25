import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Education from './Education'
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from 'react';




const Home = () => {
  const [data,Setdata]=useState(0)
  return (
    <div>  <div className='navbar navbar navbag'>
      <h3 className='ms-5 mt-3 navfont'>Satyashil</h3>
      <div className='d-flex m-10 nav'>
        <a href="/" className="me-5 text-dark nav" style={{ textDecoration: 'none' }}>Home</a>
        <About />
        <Skills />
        <Education />
        <Work />
        <Experience />
        <Contact />

      </div>
    </div>
      <div>
        <img src='image/3326663.jpg' alt='bg-image' className='bgimage' />

      </div>
      <div className='name'>
        <h1 className='lh-base'>Hi There,</h1>
        <h1 className='lh-base'>I'm Satyashil <strong className='lname'>Magre</strong></h1>
        <h4 className='lh-base'>I am Into <strong className='dev'>Web Developer</strong></h4>
        <button className='btn btn-success rounded-pill '>About Me</button>
        <div className='mlogo'>
          < a href="/" ><img src='image/facebook.png' alt='facebook' className='logo' /></a>
          < a href="/" ><img src='image/instagram.png' alt='insta' className='logo' /></a>
          < a href="/" ><img src='image/linkedin.png' alt='linkdin' className='logo' /></a>
          < a href="/" ><img src='image/telegram.png' alt='telegram' className='logo' /></a>
          < a href="/" ><img src='image/twi.png' alt='twitter' className='logo' /></a>
          < a href="/" ><img src='image/github.png' alt='github' className='logo' /></a>
        </div>
      </div>
      <div>
        <img src='image/me.png' alt="My" className='meimage' />
      </div>
      <div>
        {<Link to={`../chatbot`}>
          <img src='image/robot.png' alt='chatboticon' className='chaticon' />
        </Link> }
      </div>
      <h2>Number {data} </h2>
      <button onClick={()=>Setdata(data+1)}>increse</button>
      <button onClick={()=>Setdata(data-1)}>decreses</button>
      
  </div>


  )
}
export default Home;