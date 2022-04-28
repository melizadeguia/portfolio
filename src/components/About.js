import React from 'react';
import Header from './Header';
import Html from '../media/html.png';
import Css from '../media/css-3.png';
import Sass from '../media/sass.png';
import Bootstrap from '../media/bootstrap.png';
import JsLogo from '../media/js.png';
import ReactLogo from '../media/react.png';
import Profile from '../media/profilepic.jpg';
import MySql from '../media/mysql.png';
import about from '../media/about.png';
import DeGuia_MelizaCV from '../media/DEGUIA_meliza.pdf';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../styles/About.scss';

const About = () => {
  return (
    <div id='about'>
      <Header />

      <div id='content'>
        <div className='img'>
          <img src={Profile} alt="Meliza's Picture" />
        </div>
      </div>

      <React.Fragment>
        <CssBaseline />
        <Container>
          <div className="container-fluid" id='info'>
            <div className="row">
              <div className="col-sm">
                <div>
                  <div className="tech">
                    <ul>
                      <li><img src={Html} alt="html logo" /></li>
                      <li><img src={Css} alt="css logo" /></li>
                      <li><img src={Sass} alt="sass logo" /></li>
                      <li><img src={Bootstrap} alt="bootstrap logo" /></li>
                      <li><img src={JsLogo} alt="javascript logo" /></li>
                      <li><img src={ReactLogo} alt="react js logo" /></li>
                      <li><img src={MySql} alt="MySql logo" /></li>
                    </ul>
                  </div>

                  <div className='area'>
                  <div className='png'>
                    <img src={about} alt="working" />
                  </div>
                  </div>

                </div>
              </div>
              <div className="col-sm" id='text'>
                <div className='description'>
                  <h2>About</h2>

                  <p>"I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with React JS; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well, i think...
                    <br />
                    I'm curious, and I enjoy work that challenges me to learn something new and stretch in a different direction."</p>

                  <a href={DeGuia_MelizaCV} class="btn" download="DeGuia_MelizaCV"><button>Download CV</button></a>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm'>

              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  )
}

export default About