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
      case 'codepen':
        return <FaCodepen/>
      case 'facebook':
        return <FaFacebook/>
      case 'github':
        return <FaGithub/>
      case 'linkedIn':
        return <FaLinkedin/>
      case 'twitter':
        return <FaTwitter/>
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
              active={header.social.activeKey === name}
              onClick={this.handleIconClick(name)}
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

    return (
      <SocialMediaLinksContainer isAuth={isAuth} hasActiveItem={header.social.activeKey}>
        {this.renderSocialMediaLinks()}
        {header.social.showInput && (
          <SocialMediaLinksController
            inputValue={inputValueTemp}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
          />
        )}
        {header.social.showInput && <OusideClickContainer onClick={this.handleInputBlur}/>}
      </SocialMediaLinksContainer>
    );
  }
}

export default SocialMediaLinks;