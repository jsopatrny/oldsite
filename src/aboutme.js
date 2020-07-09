import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './homepage.js';
import icon from './icon.png';
import Button from '@material-ui/core/Button';
import me from './me.jpg';
import './App.css';
import Socials from './socials.js';
import Pdf from './Documents/resume.pdf';
//import logo from './logo.svg';

class AboutMe extends Component {

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
          <Button style={{marginLeft: '10px', marginRight: '10px', color: '#ff0d4d'}}>About Me</Button>
          <Link to='/projects' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Projects</Button></Link>
          <a href = {Pdf} target = "_blank" style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Resume</Button></a>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '-5px'}}>
        <img className="Photo" src={me} style={{height: '18em', bottom: '20px', zIndex: '2', borderWidth: '20px', borderColor: '#000000'}}></img>
          
        <div style={{backgroundColor: '#ff0d4d', padding: '15px', marginLeft: '20px', borderRadius: 3, width: '280px', height: '16.75em'}}>
            <h4 className="name">Julia Opatrny</h4>
            <h6 style={{marginTop: '-22px', fontStyle: 'italic'}} className="name">jsopatrny@gmail.com</h6>
            <h6 style={{marginTop: '-25px'}}>(917) 208-2775</h6>
            <body style={{marginTop: '-10px', fontSize: '15px', marginBottom: '12px'}} className="name">
            Born and raised in New York City, I graduated from Hamilton College with a Bachelor of Arts in Computer Science, with minors in Music and Digital Arts in May 2020. I have mostly back-end experience, coding in C++ and Python for the past four years, but I also love practicing web development when I can. When I am not coding, I love playing the drums, making earrings, sewing, or playing Minecraft.
            </body>
          </div>
        </div>
        <div style={{zIndex: '3', left: '0px', position: 'static', margin: '10px'}}>
        {/* <div style={{zIndex: '3', position: 'absolute', bottom: '5px', left: '50%', marginLeft: '-66px'}}> */}
          <Socials/>
        </div>
    </div>
  );
  }
}


export default AboutMe;
