import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/Pages/NotFound';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Header/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>

          <Route path="/admin">
            <Admin/>
          </Route>

          <Route path="/deals">
            <Deals/>
          </Route>

          <PrivateRoute path="/product/:id">
            <Checkout/>
          </PrivateRoute>

          <Route path="/login">
            <Login/>
          </Route>


          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
