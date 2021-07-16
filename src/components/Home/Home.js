import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Loader from '../Pages/Loader';
import Product from '../Product/Product';
import './Home.css';


const Home = () => {
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);
    
    // getting from server
    useEffect(() => {
        setLoading(true)
        fetch('https://guarded-inlet-29456.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            
        })

        setTimeout(() => {
            setLoading(false)
        }, 4000);
        
    }, [])
    
    
    

    return (
        <div class="home">

            <Container>
                
                <div className="search">
                    <Form>
                        <Form.Control type="text" placeholder="Search Product..." />
                        <Button variant="danger" type="search"> Search</Button>
                    </Form>
                </div>

                <div className="products pt-5">

                    {
                        loading ?
                        
                        <Loader/>

                        :
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                   

                </div>

            </Container>
            
        </div>
    );
};

export default Home;