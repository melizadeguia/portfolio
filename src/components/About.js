import React from 'react';
import Header from './Header';
import Html from '../media/html.png';
import Css from '../media/css-3.png';
import Sass from '../media/sass.png';
import Bootstrap from '../media/bootstrap.png';
import JsLogo from '../media/js.png';
import ReactLogo from '../media/react.png';
import Profile from '../media/profilepic.jpg';
import DeGuia_MelizaCV from '../media/DEGUIA_meliza.pdf';
import '../styles/About.scss';

const About = () => {
  return (
    <div id='about'>
      <Header />

      <div id='content'>
        <div className="container">
          <h1>About</h1>
          <div className="row">
            <div className="col-sm">
              <div className='image'>
                <img src={Profile} alt="Meliza's Picture" />
              </div>
            </div>
            <div className="col-sm">
              <div className='description'>
                <h2>Meliza De Guia</h2>
                <p>" I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with React JS; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well, i think...
                  <br />
                  I'm curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand."</p>

                <a href={DeGuia_MelizaCV} class="btn" download="DeGuia_MelizaCV"><button>Download CV</button></a>

              <div class="tech">
                <ul>
                  <li><img src={Html} alt="html logo" /></li>
                  <li><img src={Css} alt="css logo" /></li>
                  <li><img src={Sass} alt="sass logo" /></li>
                  <li><img src={Bootstrap} alt="bootstrap logo" /></li>
                  <li><img src={JsLogo} alt="javascript logo" /></li>
                  <li><img src={ReactLogo} alt="react js logo" /></li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About