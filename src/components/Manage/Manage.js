import React from 'react';
import './Manage.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loader from '../Pages/Loader';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Manage = ({product}) => {

    const [loading, setLoading] = useState(false)

    const classes = useStyles();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://guarded-inlet-29456.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))


        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, [])
    

    //console.log(products)

    const handleDelete = (id) => {
        //console.log('deleted', id)
        fetch(`https://guarded-inlet-29456.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Item Deleted Successfully')
                // event.target.parentNode.style.display = 'none';
            }
        })
        
    }


    return (
        <div className="manage">
            
            <h4 className="pb-5">Manage Product</h4>

                {
                    loading ?
                    <Loader/>
                    :
                

                <TableContainer component={Paper}>
                <Table className={classes.table}  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Product Name</TableCell>
                        <TableCell align="center">Wight</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.name}>
                        <TableCell align="center" component="th" scope="row">
                            {product.name}
                        </TableCell>
                        <TableCell align="center">{product.wight}</TableCell>
                        <TableCell align="center">৳ {product.price}</TableCell>
                        <TableCell align="center">
                            
                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(product._id)} aria-label="delete" color="danger">
                                <DeleteIcon />
                            </IconButton>

                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                }

            
        </div>
    );
};

export default Manage;