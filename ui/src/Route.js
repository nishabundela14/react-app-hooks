import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListDetail from './components/ListDetail';
import App from './App';


const routing = (
    <Router>
    <Switch>
        <Route exact path="/" component={App} />
          <Route exact path="/:id" component= {ListDetail} />
    </Switch>
    </Router>
)

export default routing
