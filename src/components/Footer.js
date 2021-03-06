import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div>
        <div className='icons'>
            <Container>
                <Row>
                    <ul>
                        <li><a href='mailto: melizadeguia98@gmail.com'><EmailIcon fontSize='large'/></a></li>
                        <li><a href='https://github.com/melizadeguia'><GitHubIcon fontSize='large'/></a></li>
                        <li><a href='https://www.linkedin.com/in/meliza-de-guia/'><LinkedInIcon fontSize='large'/></a></li>
                    </ul>
                </Row>
            </Container>
        </div>

        <div className='copyright'>
            <Container >
                <Row>
                    <h4>Handcrafted by me &copy; 2022</h4>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Footer