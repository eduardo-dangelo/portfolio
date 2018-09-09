import React, { PureComponent } from 'react'
import { SocialMediaLinksContainer, IconContainer } from "./Elements";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'
import SocialMediaLinksController from '../../../Controllers/SocialMediaLinksController'

class SocialMediaLinks extends PureComponent {
  state = {
    github: '',
    codepen: '',
    twitter: '',
    facebook: '',
    linkedIn: '',
    activeLink: ''
    showInput: false,
  }

  handleIconClick = (key) => () => {
    this.state({
      showInput: true,
      activeLink: key
    })
  }

  render() {
    return (
      <SocialMediaLinksContainer>
        <IconContainer onClick={this.handleIconClick('codepen')}>
          <FaCodepen/>
        </IconContainer>
        <IconContainer onClick={this.handleIconClick('facebook')}>
          <FaFacebook/>
        </IconContainer>
        <IconContainer onClick={this.handleIconClick('github')}>
          <FaGithub/>
        </IconContainer>
        <IconContainer onClick={this.handleIconClick('linkedIn')}>
          <FaLinkedin/>
        </IconContainer>
        <IconContainer onClick={this.handleIconClick('twitter')}>
          <FaTwitter/>
        </IconContainer>
        <SocialMediaLinksController/>
      </SocialMediaLinksContainer>
    );
  }
}

export default SocialMediaLinks;