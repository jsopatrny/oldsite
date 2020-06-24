import React, { Component } from 'react';
import { Document } from 'react-pdf';
import  ReactDOM  from  'react-dom';
import Pdf from './Documents/resume.pdf';
// import {SocialMediaIconsReact} from 'social-media-icons-react';

class Resume extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank">Download PDF</a>
      </div>
    );
  }
}

export default Resume;