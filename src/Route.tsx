import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';
import NavBar from './components/Navbar';
import Product from './components/Product';

function RouteConfig() {

  return (
	<div>
        <Router>
          <NavBar />
            <Switch>
                <Route exact path="/" component={Product}/>
              
                <Route exact path="/cart" component={Cart}/>
              
                <Route component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;
