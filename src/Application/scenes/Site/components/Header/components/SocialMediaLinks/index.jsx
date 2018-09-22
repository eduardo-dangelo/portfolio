import React from 'react'
import { map } from 'lodash'
import { OusideClickContainer } from '../../Elements'
import { SocialMediaLinksContainer, IconContainer, IconLink } from './Elements'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'
import SocialMediaLinksController from '../../../Controllers/SocialMediaLinksController'

class SocialMediaLinks extends React.PureComponent {
  state = {
    inputValueTemp: '',
  }

  handleIconClick = (key) => () => {
    const { header, actions } = this.props
    this.setState({
      inputValueTemp: header.social.links[key]
    })
    actions.showLinkInput(key)
  }

  handleInputBlur = (e) => {
    const { actions, header } = this.props
    actions.updateSocialMediaValue(header.social.activeKey, e.target.value)
  }

  handleInputChange = (e) => {
    this.setState({
      inputValueTemp: e.target.value
    })
  }

  renderSocialMediaIcon = (name) => {
    switch (name) {
      case 'github':
        return <FaGithub/>
      case 'codepen':
        return <FaCodepen/>
      case 'twitter':
        return <FaTwitter/>
      case 'linkedIn':
        return <FaLinkedin/>
      case 'facebook':
        return <FaFacebook/>
      default:
        return null;
    }
  }

  renderSocialMediaLinks = () => {
    const { header, isAuth, cssProps: { color } } = this.props

    return map(header.social.links, (value, name) => {
      return (
        <div key={name}>
          {!isAuth && value && (
            <IconLink color={color} href={value} target="_blank">
              {this.renderSocialMediaIcon(name)}
            </IconLink>
          )}
          {isAuth && (
            <IconContainer
              hasValue={value}
              onClick={this.handleIconClick(name)}
              active={header.social.activeKey === name}
            >
              {this.renderSocialMediaIcon(name)}
            </IconContainer>
          )}
        </div>
      )
    })
  }

  render() {
    const { isAuth, header } = this.props
    const { inputValueTemp } = this.state
    const showInput = header.social.showInput
    const activeItem = header.social.activeKey;

    return (
      <SocialMediaLinksContainer isAuth={isAuth} hasActiveItem={activeItem}>
        {this.renderSocialMediaLinks()}
        {showInput && (
          <SocialMediaLinksController
            inputValue={inputValueTemp}
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