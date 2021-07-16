import React from 'react';
import { useState } from 'react';
import GridLoader from "react-spinners/GridLoader";
import './Loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);



    return (
        
        <div className="loader">
            <GridLoader color={"#D77936"} loading={loading} size={30}  />
        </div>
        
    );
};

export default Loader;