import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name, price, wight, image, _id} = product;

    // const history = useHistory();
    // const handleBuyNow = (id) => {
    //     const url = `/product/${id}`
    //     history.push(url)
    // }


    return (
        <div className="single pt-4">
            <div className="single-product">
                <img src={image} alt="" />
                <div className="product-info">
                    <div className="one itemFlex">
                        <h4>{name}</h4>
                        <h4>{wight}</h4>
                    </div>
                    <div className="two itemFlex">
                        <h2>৳ {price}</h2>
                        <button className="btn btn-danger">
                            <Link to={"/product/"+_id}>
                             Buy Now
                            </Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;