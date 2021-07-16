import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        //console.log(data)
        const formData = {
            name: data.name,
            price: data.price,
            wight: data.wight,
            image: imageURL
        }
        //console.log(formData)
        fetch('https://guarded-inlet-29456.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(result => {
            alert('Add Product Successful')
            
        })
    };

    const handleImageUpload = event => {
        //console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'af55737b4b3bf5bb2b3a14f0d8c5a64e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function(response) {
            setImageURL(response.data.data.display_url)
        })
        .catch(function(error){
            console.log(error)
        })

    }

    return (
        <div className="add-product">
            <h4>Add your product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                <label>Product Name</label>
                <br/>
                <input name="name" className="form-control" placeholder="Enter Name" {...register("name")} required/>
                    </Col>

                    <Col  lg={6} md={6} sm={6}>
                <label>Wight</label>
                <br/>
                <input name="wight" className="form-control" placeholder="Enter Wight" {...register("wight")} required/>
                </Col>

                <Col lg={6} md={6} sm={6}>
                <label>Add Price</label>
                <br/>
                <input name="price" className="form-control" placeholder="Enter Price" {...register("price")} required/>
                </Col>
                
                <Col lg={6} md={6} sm={6}>
                <label>Add Photo</label>
                <br/>
                <input type="file" onChange={handleImageUpload} required className="form-control"/>
                </Col>

                
                
                <input type="submit" value="Save" className="btn btn-danger"/>

                </Row>

            </form>
        </div>
    );
};

export default AddProduct;