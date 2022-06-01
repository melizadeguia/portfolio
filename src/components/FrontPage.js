import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About from './About';
import Tech from './Tech';
import Projects from './Projects';
import Contact1 from './Contact1';
import '../styles/FrontPage.scss';


const FrontPage = () => {
    return (
        <div>
            <div className='banner'>
                <Container>
                    <Row>
                        <Col>
                            <div className='intro'>
                                <div className='name'>
                                    <h1>Hello, I'm Meliza.</h1>
                                </div>

                                <div className='desc'>
                                    <p>I'm a Front-end Web Developer based in Manila, Philippines <br/> and i enjoy creating things that live on the internet. See my portfolio and feel free to say hi.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <About/>
                <Tech/>
                <Projects/>
                <Contact1/>
            </div>
        </div>
    )
}

export default FrontPage