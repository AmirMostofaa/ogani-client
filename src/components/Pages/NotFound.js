import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
  return (
    <div>
      <Container>
          
          <Row>
            
              <div className="not-found-content text-center">
                <h1>404</h1>
                <h3>Something went wrong</h3>
                <p>We're deeply sorry, but something went wrong. Please try to refresh the page or</p>
                <Link to="/">start over.</Link>
              </div>
            
          </Row>
        
      </Container>
    </div>
  );
};

export default NotFound;