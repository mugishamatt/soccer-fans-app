import React from 'react';
import {
    Route,
    NavLink,
    Router,
    Switch
  } from "react-router-dom";

    function Routes () {

        return (
            <Router>
            <div>
                <h1>Soccer fans Application</h1>
                
                <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/stuff">Leagues</NavLink></li>
           {/* <li><NavLink to="/contact"></NavLink></li> */}
          </ul>
          <Switch>
          <div className="content">
         <Route exact path="/" component={Home}/>
         <Route path="/stuff" component={Leagues}/>
         {/* <Route path="/contact" component={Contact}/> */}
          </div>
          </Switch>
            </div>
            </Router>
          );
    }
 
export default Routes ;