import React from 'react';
import './Order.css';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from '../Pages/Loader';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });


const Order = () => {

    const [loading, setLoading] = useState(false)

    const classes = useStyles();

    const [loggedInUser] = useContext(UserContext)

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://guarded-inlet-29456.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(res => res.json())
        .then(data => setOrders(data))

        setInterval(() => {
            setLoading(false)
        }, 4000);
    }, [])

    return (
        <div>
            <Container className="order pt-5 pb-5">

                <h4 className="pb-4">Your Ordered Items: </h4>

                {
                    loading ?
                    <Loader/>
                    :
                

                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product</StyledTableCell>
                        <StyledTableCell align="center">Wight</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((order) => (
                        <StyledTableRow key={order._id}>
                        <StyledTableCell component="th" scope="row">
                            <img src={order.image} alt="" />{order.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{order.wight}</StyledTableCell>
                        <StyledTableCell align="center">৳ {order.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                }

            </Container>
        </div>
    );
};

export default Order;