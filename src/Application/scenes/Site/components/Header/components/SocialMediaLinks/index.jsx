import React from 'react'
import { map } from 'lodash'
import { OusideClickContainer } from '../../elements'
import { SocialMediaLinksContainer, IconContainer, IconLink } from './elements'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'
import SocialMediaLinksController from '../../../Controllers/SocialMediaLinksController'

class SocialMediaLinks extends React.PureComponent {
  state = {
    activeKey: '',
    showInput: false,
    inputValueTemp: ''
  }

  handleIconClick = (key) => () => {
    const { header } = this.props
    this.setState({
      activeKey: key,
      showInput: true,
      inputValueTemp: header.social[key]
    })
  }

  handleInputBlur = (e) => {
    const { actions } = this.props
    const { activeKey } = this.state

    actions.updateHeaderProps('social', activeKey, e.target.value)
    this.setState({ activeKey: '', showInput: false, inputValueTemp: '' })
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
    const { activeKey } = this.state

    return map(header.social, (value, name) => {
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
              active={activeKey === name}
            >
              {this.renderSocialMediaIcon(name)}
            </IconContainer>
          )}
        </div>
      )
    })
  }

  render() {
    const { isAuth } = this.props
    const { inputValueTemp, showInput, activeKey } = this.state

    return (
      <SocialMediaLinksContainer isAuth={isAuth} hasActiveItem={activeKey}>
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