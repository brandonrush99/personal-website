import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Workexperience from './components/workexperience';
import Academic from './components/academic';
import Personal from './components/personal';
import NavigationBar from './components/navbar';
import Resume from './components/resume';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/workexperience" component={Workexperience} />
        <Route path="/academic" component={Academic} />
        <Route path="/personal" component={Personal} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
