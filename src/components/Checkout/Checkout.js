import { Table } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const Checkout = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {id} = useParams();
    
    const [productById, setProductById] = useState({});

    const [orders, setOrders] = useState({});

    useEffect(() => {

        fetch(`https://guarded-inlet-29456.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => {
            setProductById(data);
            setOrders(data)
        })
        .then(res => {
            if(res){
                alert('Order Successful')
            }
        })

    }, [id])

    
    //console.log(productById)
    const {name, price, wight} = productById;
    

    // handling Order

    const handleOrder = () => {
        const newOrder = {...loggedInUser, ...orders};
        console.log(newOrder)
        fetch('https://guarded-inlet-29456.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(result => {
            alert('Order Successful')
        })
    }

    return (
        <div className="checkout">
            <Container>
                <h4 className="pt-5 pb-4">Checkout </h4>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Description</th>
                    <th>Wight</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    <td>{name}</td>
                    <td>{wight}</td>
                    <td>৳ {price}</td>
                    </tr>
                    <tr className="myBorder pt-2">
                    
                    <td><b>Total</b></td>
                    <td></td>
                    <td><b>৳ {price}</b></td>
                    </tr>

                    
                    
                </tbody>
                </Table>

                <div className="orderMake pt-5">
                    <button className="btn btn-primary m-3"><Link to="/order">Previous Order</Link>  </button>
                    <button onClick={handleOrder} className="btn btn-danger">Order Now</button>
                </div>

            </Container>
            
        </div>
    );
};

export default Checkout;