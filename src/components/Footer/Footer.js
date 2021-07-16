import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../logo.webp';
import './Footer.css';
import fImage from '../../images/pay.png';




const Footer = () => {
    return (
        <div className="footer pt-5">
            <Container>
                <Row className="pb-4">
                    <Col md={4}>
                        <div className="about">
                            <img className="pb-2" src={logo} alt="" />
                            <address>Address: 4700 Cox's Bazar, Bangladesh</address>
                            <p>Phone: +8801826981776</p>
                            <p>Email: iammostafa76@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="usefulLinks">
                            <h4 className="pb-2">Useful Links</h4>
                            <ul>
                                <li>About Us</li>
                                <li>About Our Shop</li>
                                <li>Secure Shopping</li>
                                <li>Delivery information</li>
                                <li>Privacy Policy</li>
                                <li>Our Sitemap</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="usefulLinks">
                            <h4 className="pb-2">Menu</h4>
                            <ul>
                                <li>About Us</li>
                                <li>About Our Shop</li>
                                <li>Secure Shopping</li>
                                <li>Delivery information</li>
                                <li>Privacy Policy</li>
                                <li>Our Sitemap</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className="pb-2">Get in Touch</h4>
                        <form action="">
                            <input type="text" className="form-control" placeholder="Enter Email"/>
                            <input type="submit" value="Send" className="btn btn-danger" />
                        </form>
                        
                    
                    </Col>
                </Row>

                <Row class="pt-5">
                    <div className="copyright">
                        <div className="copy">
                        <p>Copyright ©2021 All rights reserved | Made with ❤️ by Amir</p>
                        </div>
                    
                    
                        <div className="pay">
                        <img src={fImage} alt="" />
                        </div>
                    
                    </div>
                    
                </Row>

            </Container>
            
        </div>
    );
};

export default Footer;