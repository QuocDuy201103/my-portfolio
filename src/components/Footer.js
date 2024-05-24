import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Newsletter from './Newsletter'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import gitHubIcon from '../assets/img/github.svg'
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Newsletter />
                    <Col sm={6}>
                        <img src={logo} alt='Logo'/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://github.com/QuocDuy201103?tab=repositories'><img src={gitHubIcon} /></a>
                            <a href='https://www.facebook.com/tui.tenduy.906'><img src={navIcon2} /></a>
                            <a href='https://www.instagram.com/uy_d03/'><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
