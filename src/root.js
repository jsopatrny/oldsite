import React, { Component } from 'react';
//import logo from './logo.svg';
import icon from './icon2.png';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme.js';
import Projects from './projects.js';
import './App.css';

class Root extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove(event) {
    console.log("hello!")
    this.setState({
      x: event.screenX,
      y: event.screenY
    });
  }

  
  render() {
    const {x, y} = this.state;
  return (
    <Router>
    <div className="App">
      {/* <div className="eyes">
        <div className="eye"> */}
          <div class="ball" style={{position: "absolute", left: x, top: y}}></div>

        {/* </div>
      </div> */}
      
      {/* <script>
        var balls = document.getElementsByClassName("ball");
        document.onmousemove = function() {
          var x = event.clientX * 100 / window.innerWidth + "%";
          var y = event.clientY * 100 / window.inner + "%";
        }
      </script> */}

      <img src={icon} style={{height: '10em', marginTop: '-150px', zIndex: '2'}}></img>
      <div onMouseMove={this.handleMouseMove.bind(this)}>
          <h1>Mouse coordinates: { x } { y }</h1>
        </div>
        <Switch>
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
        </Switch>
      <a href='https://www.linkedin.com/in/julia-opatrny/' target="_blank" style={{textDecoration: 'none', marginTop: '-10px'}}><Button className="Button" disableElevation
      >About Me</Button></a>
      <a href='https://github.com/jsopatrny' target="_blank" style={{textDecoration: 'none'}}><Button disableElevation className="Button"
      >Projects</Button></a>
      <a href='https://www.instagram.com/tiny_slimy/' target="_blank" style={{textDecoration: 'none'}}><Button disableElevation className="Button"
      >Resume</Button></a>
    </div>
    </Router>
  );
  }
}


export default Root;
