import React, { Component } from 'react';
import  ReactDOM  from  'react-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import { Linking } from 'react-native';
// import {SocialMediaIconsReact} from 'social-media-icons-react';

class Socials extends Component {

  render() {
  return (
    <div>
        <a href="https://github.com/jsopatrny" target="_blank"><GitHubIcon className="socials"/></a>
        <a href="https://www.linkedin.com/in/julia-opatrny/" target="_blank"><LinkedInIcon className="socials"/></a>
        <a href="https://www.instagram.com/tiny_slimy" target="_blank"><InstagramIcon className="socials"/></a>
        <a href="https://vimeo.com/user76213023" target="_blank"><VideoLibraryIcon className="socials"/></a>
        {/* <a href="https://vimeo.com/user76213023" target="_blank"><MailOutlineIcon className="socials"  /></a> */}

        {/* onClick={() => Linking.openURL('mailto:jsopatrny@gmail.com') }
      title="jsopatrny@gmail.com" */}
        {/* <SocialMediaIconsReact hover="#f9a620" borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(249,166,32,1)" backgroundColor="rgba(28,186,223,0)" iconSize="5" roundness="20%" url="https://github.com/jsopatrny" size="100" /> */}
    </div>
  );
  }
}


export default Socials;