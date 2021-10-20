import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Admin.css';
import logo from '../../logo.webp';
import manageIcon from '../../images/grid 1.png';
import addIcon from '../../images/plus 1.png';
import editIcon from '../../images/edit 1.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Manage from '../Manage/Manage';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';


const Admin = () => {



    return (
        <div className="admin">
            <Router>
                <Row>
                    <Col sm={3}>
                        <div className="side-bar text-center">
                            <img src={logo} alt="" />

                            
                                <Link to="/admin/manage">
                                    <div className="manage adminNav">
                                        <img src={manageIcon} alt="" />
                                        <p>Manage Product</p>
                                    </div>
                                </Link>

                                <Link to="/admin/addProduct">
                                    <div className="add adminNav">
                                        <img src={addIcon} alt="" />
                                        <p> Add Product</p>
                                    </div>
                                </Link>

                                <Link to="/admin/editProduct">
                                    <div className="edit adminNav">
                                        <img src={editIcon} alt="" />
                                        <p>Edit Product</p>
                                    </div>
                                </Link>

                            
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="admin-content">
                            
                            <Switch>
                                <Route path="/admin/manage">
                                    <Manage/>                                    
                                </Route>
                                <Route path="/admin/addProduct">
                                    <AddProduct/>
                                </Route>
                                <Route exact path="/admin/">
                                    <AddProduct/>
                                </Route>
                                <Route path="/admin/editProduct">
                                    <EditProduct/>
                                </Route>

                             </Switch>
                            
                        </div>
                        
                    </Col>
                </Row>
            
            </Router>
        </div>
    );
};

export default Admin;