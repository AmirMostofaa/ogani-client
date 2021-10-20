import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../src/logo.webp';
import { useContext } from 'react';
import { UserContext } from '../../App';
// import avatar from '../../../src/images/Avatar face.png';


const Header = () => {

  const [loggedInUser] = useContext(UserContext);

    return (
        <div>
            <Navbar className="myHeader" expand="lg">
                <Container>
                    <Navbar.Brand to="/">
                      <Link to="/"><img src={logo} alt="" /></Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                    <Nav className="">
                        <Nav.Link>
                          <Link to="/home">Home</Link>    
                        </Nav.Link>
                        <Nav.Link>
                          <Link to="/order">Order</Link>    
                        </Nav.Link>
                        <Nav.Link>
                          <Link to="/admin">Admin</Link>    
                        </Nav.Link>
                        <Nav.Link>
                          <Link to="/deals">Deals</Link>    
                        </Nav.Link>

                        { 
                          loggedInUser.isSignIn ?
                          <Nav.Link>
                          <img src={loggedInUser.image} alt="" />   
                          </Nav.Link>

                          :

                          <Button variant="danger">
                          <Link to="/login">login</Link> 
                          </Button>
                        }
                       
                        

                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;