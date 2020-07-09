import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import Socials from './socials.js';
import Button from '@material-ui/core/Button';
import Pdf from './Documents/resume.pdf';
//import logo from './logo.svg';

class Projects extends Component {

  render() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '50px'}}>
      <div style={{marginBottom: '20px'}}>
          <div>
          <Link to='/' style={{textDecoration: "none"}}>
              <img src={icon} style={{height: '125px', zIndex: '0', marginRight: '10px', marginBottom: '20px', marginTop: '-50px'}}></img>
            </Link>
            </div>
          <div style={{marginTop: '-32px', marginBottom: '10px'}}>
          <Link to='/' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Home</Button></Link>
          <Link to='/about' style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>About Me</Button></Link>
            <Button  style={{marginLeft: '10px', marginRight: '10px', color: '#ff0d4d'}}>Projects</Button>
            <a href = {Pdf} target = "_blank" style={{textDecoration: "none"}}><Button className="navbar" style={{marginLeft: '10px', marginRight: '10px'}}>Resume</Button></a>
          </div>
        </div>
        <div style={{overflowY: 'scroll', height: '18em', marginTop: '-30px', width: "100%"}}>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>Decaf Compiler</h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Fall 2019</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">A compiler built in C++ that compiles Decaf code into Jasmin assembly code.</body>
          </div>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>Art History Fantasy Collecting Website </h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Fall 2019</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">An art-collecting website built using a MERN stack (MySQL, Express, React, Node.js), commissioned by the Hamilton College Art History Department, to be used by
Hamilton art history students.</body>
          <a target="_blank" style={{textDecoration: 'none'}} href="https://github.com/jsopatrny/SeniorProject"><Button className="imbedded" style={{color: '#ffffff', marginTop: '-15px', marginLeft: '-7px'}} >Github</Button></a>
          </div>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>Employer User Homepage</h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Summer 2019 - WorkMarket</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">A new employer user dashboard for WorkMarket, an ADP Company's website that was independently created, while employed by WorkMarket, using JavaScript and the React
framework, and worked with a RESTful API using Postman and Swagger.</body>
          </div>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>SIC/XE Assembler in Python</h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Fall 2018</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">A program that performs a two-pass compilation of assembly
language into machine language.</body>
          </div>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>Hexdump Written in Assembly</h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Fall 2018</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">A program that emulates UNIX hexdump capability, but
written in assembly language.</body>
          </div>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>Huffman Encoding Algorithm</h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Fall 2017</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">A compression algorithm written in C++ utilizing
Huffman Encoding and binary tree data structures.</body>
          </div>

          <div className="proj">
            <h4 className="name" style={{marginTop: '20px'}}>Sudoku Puzzle Solver</h4>
            <h6 style={{marginTop: '-30px', fontStyle: 'italic'}} className="name">Fall 2017</h6>
            <body style={{marginTop: '-30px', fontSize: '15px', marginBottom: '12px'}} className="name">A backtracking algorithm written in C++ to successfully solve any and all
 Sudoku puzzles.</body>
          </div>


        </div>
        <div style={{zIndex: '3', position: 'absolute', bottom: '0px', right: '50%', marginRight: '-85px'}}>
        {/* <div style={{zIndex: '3', position: 'absolute', bottom: '5px', left: '50%', marginLeft: '-66px'}}> */}
          <Socials/>
        </div>
    </div>
  );
  }
}


export default Projects;
