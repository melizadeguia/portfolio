import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from '../media/profile.jpg';
import '../styles/About.scss'

const About = () => {
    return (
        <div className='about'>
            <Container fluid='sm' className='m-5 pt-5 pb-5'>
                <Row>
                    <Col sm={6}>
                        <div className='image'>
                            <img src={Profile} alt='profile' className='framed' />
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className='aboutdesc'>
                            <h1>About</h1>
                            <p>"I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with React JS; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well, i think...
                                I'm curious, and I enjoy work that challenges me to learn something new and stretch in a different direction."</p>
                        </div>
                        <div className='btn'>
                           <a href='src\media\DEGUIA_CV.pdf' download><button>Download CV</button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About