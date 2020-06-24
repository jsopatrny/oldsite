import React, { Component } from 'react';
//import logo from './logo.svg';
import icon from './icon2.png';
import Button from '@material-ui/core/Button';
import AboutMe from './aboutme.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './homepage.js';
import Projects from './projects.js';
import Resume from './resume.js';
import Notfound from './notfound.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
  return (
    <Router>
    <div className="App">
      <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route component={Notfound} />
            <Homepage />
        </Switch>
    </div>
    </Router>
  );
  }
}


export default App;
