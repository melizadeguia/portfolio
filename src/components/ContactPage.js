import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';


const ContactPage = () => {
    return (
        <div>
            <Header />
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default ContactPage