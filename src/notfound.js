import React, { Component } from 'react';
import { Document } from 'react-pdf';
import { Link } from 'react-router-dom';
import  ReactDOM  from  'react-dom';
import cry from './404.gif';
import './App.css';
import Socials from './socials.js';
import icon from './icon.png';
import Button from '@material-ui/core/Button';
// import {SocialMediaIconsReact} from 'social-media-icons-react';

class NotFound extends Component {

  render() {
  return (
    <div>
      <div>
          <Link to='/' style={{textDecoration: "none"}}>
            <img src={icon} style={{height: '125px', bottom: '20px', zIndex: '0', marginRight: '10px', marginBottom: '20px'}}></img>
          </Link>
          </div>
        <div style={{marginTop: '-32px', marginBottom: '20px'}}>
        <Link to='/' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Home</Button></Link>
          <Link to='/about' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>About Me</Button></Link>
          <Link to='/projects' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Projects</Button></Link>
          <Link to='/resume' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Resume</Button></Link>
        </div>
      <div style={{height: '20em'}}>
        <img src={cry} style={{height: '15em', /* backgroundColor: '#ff0d4d', borderRadius: '15px'*/}}></img>
      </div>
      <div style={{position: 'absolute', bottom: '10px', right: '50%', marginRight: '-85px'}}>
        {/* <div style={{zIndex: '3', position: 'absolute', bottom: '5px', left: '50%', marginLeft: '-66px'}}> */}
          <Socials/>
        </div>
    </div>
  );
  }
}


export default NotFound;