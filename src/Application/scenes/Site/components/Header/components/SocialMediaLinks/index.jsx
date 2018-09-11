import React, { PureComponent } from 'react'
import { SocialMediaLinksContainer, IconContainer } from "./Elements";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'
import SocialMediaLinksController from '../../../Controllers/SocialMediaLinksController'
import { OusideClickContainer } from "../../Elements";

class SocialMediaLinks extends PureComponent {
  state = {
    github: 'github',
    codepen: 'codepen',
    twitter: 'twitter',
    facebook: '',
    linkedIn: '',
    activeKey: '',
    inputValue: '',
    showInput: false,
  }

  handleIconClick = (key) => () => {
    this.setState({
      showInput: true,
      activeKey: key,
      inputValue: this.state[key]
    })
  }

  handleInputBlur = (e) => {
    const { activeKey } = this.state
    this.setState({
      activeKey: '',
      showInput: false,
      [activeKey]: e.target.value
    })
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const {
      github,
      codepen,
      twitter,
      facebook,
      linkedIn,
      activeKey,
      showInput,
      inputValue,
    } = this.state

    return (
      <SocialMediaLinksContainer hasActiveItem={activeKey}>
        <IconContainer
          hasValue={codepen}
          active={activeKey === 'codepen'}
          onClick={this.handleIconClick('codepen')}
        >
          <FaCodepen/>
        </IconContainer>
        <IconContainer
          hasValue={facebook}
          active={activeKey === 'facebook'}
          onClick={this.handleIconClick('facebook')}
        >
          <FaFacebook/>
        </IconContainer>
        <IconContainer
          hasValue={github}
          active={activeKey === 'github'}
          onClick={this.handleIconClick('github')}
        >
          <FaGithub/>
        </IconContainer>
        <IconContainer
          hasValue={linkedIn}
          active={activeKey === 'linkedIn'}
          onClick={this.handleIconClick('linkedIn')}
        >
          <FaLinkedin/>
        </IconContainer>
        <IconContainer
          hasValue={twitter}
          active={activeKey === 'twitter'}
          onClick={this.handleIconClick('twitter')}
        >
          <FaTwitter/>
        </IconContainer>
        {showInput && (
          <SocialMediaLinksController
            inputValue={inputValue}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
          />
        )}
        {showInput && <OusideClickContainer onClick={this.handleInputBlur}/>}
      </SocialMediaLinksContainer>
    );
  }
}

export default SocialMediaLinks;