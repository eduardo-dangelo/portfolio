import React from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { OusideClickContainer } from '../../elements'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'
import { actions as headerActions } from '../../../../../../services/redux/headerReducer'
import SocialMediaLinksController from '../../../Controllers/SocialMediaLinksController'
import { SocialMediaLinksContainer, IconContainer, IconLink, IconListUnauth, IconListAuth } from './elements'

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

  renderAuthorizedModeLinks = () => {
    const { header } = this.props
    const { activeKey } = this.state

    return (
      <IconListAuth>
        {map(header.social, (value, name) => {
          return (
            <IconContainer
              hasValue={value}
              onClick={this.handleIconClick(name)}
              active={activeKey === name}
            >
              {this.renderSocialMediaIcon(name)}
            </IconContainer>
          )
        })}
      </IconListAuth>
    )
  }

  renderUnauthorizedModeLinks = () => {
    const { header  } = this.props
    const color = header.box.color

    return (
      <IconListUnauth>
        {map(header.social, (value, name) => {

          if (!value) {
            return null
          }

          return (
            <IconLink key={name} color={color} href={value} target="_blank">
              {this.renderSocialMediaIcon(name)}
            </IconLink>
          )
        })}
      </IconListUnauth>
    )
  }

  render() {
    const { isAuth, header } = this.props
    const { inputValueTemp, showInput, activeKey } = this.state
    const color = header.box.color

    if (!header.display.social) {
      return <div/>
    }

    return (
      <SocialMediaLinksContainer isAuth={isAuth} hasActiveItem={activeKey} color={color}>
        {isAuth && this.renderAuthorizedModeLinks()}
        {!isAuth && this.renderUnauthorizedModeLinks()}
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

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(headerActions, dispatch)
  })
)(SocialMediaLinks)