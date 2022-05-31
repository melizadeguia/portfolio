import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import htmllogo from '../media/html.png';
import csslogo from '../media/css.png';
import jslogo from '../media/javascript.png';
import reactlogo from '../media/react.png';
import bootstraplogo from '../media/bootstrap.png';
import sasslogo from '../media/sass.png';
import mysqllogo from '../media/mysql.png';
import '../styles/Tech.scss';

const Tech = () => {
    return (
        <div className='tech'>
            <Container className='m-5'>
                <Row>
                    <Col sm>
                        <div className='title'>
                            <h1>Technologies</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className='techimg'>
                            <Container >
                                <Row>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={htmllogo} alt='logo'/>
                                        </div>
                                    </Col>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={csslogo} alt='logo'/>
                                        </div>
                                    </Col>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={jslogo} alt='logo'/>
                                        </div>
                                    </Col>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={reactlogo} alt='logo'/>
                                        </div>
                                    </Col>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={bootstraplogo} alt='logo'/>
                                        </div>
                                    </Col>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={sasslogo} alt='logo'/>
                                        </div>
                                    </Col>
                                    <Col sm>
                                        <div className='logo'>
                                            <img src={mysqllogo} alt='logo'/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tech