import React, { Component } from 'react';
//import logo from './logo.svg';
import icon from './icon2.png';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme.js';
import Projects from './projects.js';
import Resume from './resume.js';
import { Link } from 'react-router-dom';
import './App.css';
import Socials from './socials.js';
import Pdf from './Documents/resume.pdf';
import staticicon from './icon.png';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove(event) {
    this.setState({
      x: event.screenX,
      y: event.screenY
    });
  }

  
  render() {
    const {x, y} = this.state;
    var newx = this.state.x * 100 / window.innerWidth + "%";
    var newy = this.state.y * 100 / window.innerHeight + "%";
    if (window.innerWidth <= 760){
      return (    <div className="App" onMouseMove={this.handleMouseMove.bind(this)}>
      <div style={{height: '100px', marginTop: '30px', marginLeft: '-370px'}}>
      <img src={staticicon} style={{height: '200px', marginTop: '-39px', zIndex: '5', position: 'absolute'}}></img>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px', marginTop: '30px'}}>
      <Link to='/about' style={{textDecoration: "none"}}>
        <Button className="Button" disableElevation onClick={this.forceUpdate}
        >About Me</Button>
      </Link>
      <Link to='/projects' style={{textDecoration: "none"}}>
        <Button disableElevation className="Button"
        >Projects</Button>
    </Link>
    <a href = {Pdf} target = "_blank" style={{textDecoration: "none"}}><Button disableElevation className="Button"
      >Resume</Button></a>
        <div style={{zIndex: '3', position: 'absolute', bottom: '5px', left: '50%', marginLeft: '-85px'}}> <Socials /></div>
      </div>
    </div>);
    } else {
  return (
    <div className="App" onMouseMove={this.handleMouseMove.bind(this)}>
      <div style={{height: '100px', marginTop: '30px', marginLeft: '-370px'}}>
      <img src={icon} style={{height: '200px', marginTop: '-39px', zIndex: '5', position: 'absolute'}}></img>
        <div className="eye" style={{zIndex: '2', marginTop: '-100px', marginLeft: '88px'}}>
            <div class="ball" style={{position: 'absolute', left: newx, top: newy}}></div>
        </div>
      </div>
      
      {/* <script>
        var balls = document.getElementsByClassName("ball");
        document.onmousemove = function() {
          var x = event.clientX * 100 / window.innerWidth + "%";
          var y = event.clientY * 100 / window.inner + "%";
        }
      </script> */}

      {/* <div onMouseMove={this.handleMouseMove.bind(this)}>
          <h1>Mouse coordinates: { x } { y }</h1>
        </div> */}
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px', marginTop: '30px'}}>
      <Link to='/about' style={{textDecoration: "none"}}>
        <Button className="Button" disableElevation onClick={this.forceUpdate}
        >About Me</Button>
      </Link>
      <Link to='/projects' style={{textDecoration: "none"}}>
        <Button disableElevation className="Button"
        >Projects</Button>
    </Link>
    {/* <Link to='/resume' style={{textDecoration: "none"}}>
      <Button disableElevation className="Button"
      >Resume</Button>
    </Link> */}
    <a href = {Pdf} target = "_blank" style={{textDecoration: "none"}}><Button disableElevation className="Button"
      >Resume</Button></a>
    
      {/* <div style={{zIndex: '3', left: '0px', position: 'static', marginBottom: '-40px'}}> */}
        <div style={{zIndex: '3', position: 'absolute', bottom: '5px', left: '50%', marginLeft: '-85px'}}> <Socials /></div>
          {/* <Socials/>
        </div> */}
      </div>
    </div>
  ); }
  }
}


export default Homepage;
