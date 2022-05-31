import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import realm from '../media/realm.PNG';
import leadtech from '../media/leadtech.PNG';
import luckyg from '../media/luckyg.PNG';
import '../styles/Projects.scss';

const Projects = () => {
    return (
        <div className='proj'>
            <Container fluid='sm' >
                <div className='projects'>
                    <Row>
                        <Col>
                            <div className='title'>
                                <h1>
                                    Projects
                                </h1>
                            </div>
                        </Col>
                    </Row>

                    <Row className='m-4'>
                            <Col sm>
                                <div className='projimg'>
                                    <img src={realm} alt='project picture' />
                                </div>
                            </Col>

                            <Col sm>
                                <div className='projdesc rl'>
                                    <h1>Realm E-Magazine</h1>
                                    <p>A home and living e-magazine that focuses on interior design. <br /> (Html, CSS)</p>
                                </div>
                            </Col>
                       
                    </Row>

                    <Row className='m-4'>
                      
                        <Col sm>
                            <div className='projdesc lt'>
                                <h1>Lead Tech Outsourcing</h1>
                                <p>An Outsourcing company offering Web Development Services.
                                    <br />
                                    (React Js, Bootstrap, CSS)
                                </p>
                            </div>
                        </Col>

                        <Col sm>
                            <div className='projimg'>
                                <img src={leadtech} alt='project picture' />
                            </div>
                        </Col>
                    </Row>

                    <Row className='m-4'>
                        <Col sm>
                            <div className='projimg'>
                                <img src={luckyg} alt='project picture' />
                            </div>
                        </Col>

                        <Col sm>
                            <div className='projdesc lg'>
                                <h1>Lucky G transport <br/> (Car Rental)</h1>
                                <p></p>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div >
    )
}

export default Projects