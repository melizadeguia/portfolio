import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact1.scss';

const Contact1 = () => {
    return (
        <div className='contactfp'>
            <Container fluid='sm'>
                <Row>
                    <Col>
                        <div className='contact'>
                            <div className='head'>
                                <h1>Interested in collaborating or investing?</h1>
                            </div>

                            <div className='texts'>
                                <p>I'm always open to discussing product design work or partnership opportunities.</p>
                                <button><a href='/contact'>Start a conversation</a></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact1