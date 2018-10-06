import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaUser, FaStar, FaEnvelope, FaLink } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import Flip from 'react-reveal/Flip'

const AboutContainer = styled.div`
  padding: 15px;
  flex-shrink: 0;
  background: #dfd6ab;
  box-sizing: padding-box;
`;

const Text = styled.p`
  margin: 0 15px;
`;

const flash = keyframes`
  0% {
    border: 1px dashed transparent;
  }
  
  50% {
    border: 1px dashed;
  }

  100% {
    border: 1px dashed transparent;
  }
`;

const TextArea = styled.textarea`
  z-index: 0;
  width: calc(100% - 15px);
  overflow: auto;
  margin: 0 15px;
  resize: vertical;
  padding: 8px 5px;
  transition: .3s ease;
  box-sizing: padding-box;
  background: transparent;
  border: 1px dashed transparent;
  animation: ${flash} 2s ease-out;
  
  &:focus, &:hover {
    outline: none;
    border: 1px dashed;
  }
`;

const Heading = styled.h3`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

class About extends React.PureComponent {
  state = {
    profileValueTemp: '',
    skillsValueTemp: '',
    contactValueTemp: ''
  }

  componentDidMount() {
    const { portfolio } = this.props
    this.setState({
      profileValueTemp: portfolio.about.profile.content,
      skillsValueTemp: portfolio.about.skills.content,
      contactValueTemp: portfolio.about.contact.content
    })
  }

  handleInputBlur = (target, prop) => (e) => {
    const { actions } = this.props
    actions.updateAboutProps(target, prop, e.target.value)
  }

  handleChangeText = (target) => (e) => {
    this.setState({
      [target]: e.target.value
    })
  }

  render() {
    const { portfolio, account } = this.props
    const { profileValueTemp, skillsValueTemp, contactValueTemp } = this.state
    const about = portfolio.about
    const isAuth = account.isAuth

    return (
      <AboutContainer>
          <Heading>
            <FaUser/>
            <Flip top cascade>
              Profile
            </Flip>
          </Heading>
        {!isAuth ? (
          <Text>
            <Flip top cascade>
              {about.profile.content}
            </Flip>
          </Text>
        ) : (
          <TextArea
            value={profileValueTemp}
            onBlur={this.handleInputBlur('profile', 'content')}
            onChange={this.handleChangeText('profileValueTemp')}
          />
        )}
          <Heading>
            <FaStar/>
            <Flip top cascade>
              Skills
            </Flip>
          </Heading>
        {!isAuth ? (
          <Text>
            <Flip top cascade>
              {about.skills.content}
            </Flip>
          </Text>
        ) : (
          <TextArea
            value={skillsValueTemp}
            onBlur={this.handleInputBlur('skills', 'content')}
            onChange={this.handleChangeText('skillsValueTemp')}
          />
        )}
        <Heading>
          <FaEnvelope/>
          <Flip top cascade>
            Contact
          </Flip>
        </Heading>
        {!isAuth ? (
          <Text>
            <Flip top cascade>
              {about.contact.content}
            </Flip>
          </Text>
        ) : (
          <TextArea
            value={contactValueTemp}
            onBlur={this.handleInputBlur('contact', 'content')}
            onChange={this.handleChangeText('contactValueTemp')}
          />
        )}
        <Text>{about.contact.email}</Text>
        <Heading><FaLink/> Links</Heading>
        <Text>links here...</Text>
      </AboutContainer>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
    portfolio: state.portfolio
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(About)