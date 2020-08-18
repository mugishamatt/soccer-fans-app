import React from 'react';
import Home from "./Components/Home"
import Leagues from "./Components/Leagues"
import Teams from "./Components/Teams"
import LiveScore from "./Components/LiveScore"
import Tables from "./Components/Tables"

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
class Routes extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <h1>Soccer fans Application</h1>

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/leagues">Leagues</NavLink></li>
            <li><NavLink to="/Teams">Teams</NavLink></li>
            <li><NavLink to="/LiveScore">LiveScore</NavLink></li>
            <li><NavLink to="/Tables">Tables</NavLink></li>
          </ul>
          <Switch>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/leagues" component={Leagues} />
              <Route path="/Teams" component={Teams}/>
              <Route path="/LiveScore" component={LiveScore}/>
              <Route path="/Tables" component={Tables}/>

            </div>
          </Switch>
        </div>
      </Router>
    );
  }

}
export default Routes;