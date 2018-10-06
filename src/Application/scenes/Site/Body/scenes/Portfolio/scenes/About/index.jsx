import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaUser, FaStar, FaEnvelope, FaLink } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import Flip from 'react-reveal/Flip'
import withReveal from 'react-reveal/withReveal'
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap'


const AboutContainer = styled.div`
  padding: 15px;
  flex-shrink: 0;
  background: #dfd6ab;
  box-sizing: padding-box;
`;

const Text = withReveal(styled.p`
  margin: 15px;
`, <Flip top cascade />);

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

const EmailContainer = styled.div`
  border: 1px solid black;
  padding: 6px;
  border-radius: 0 3px 3px 0;
  height: 34px;
  display: flex;
  align-items: center;
  float: left;
  //background: #343434;
  //color: white;
`;

const FormControlContainer = styled(FormControl)`
  border: 1px solid black;
  padding: 6px;
  border-radius: 0 3px 3px 0;
  height: 34px;
  display: flex;
  align-items: center;
  float: left;
`;

const InputGroupButton = styled(Button)`
  border: 1px solid black;
  background: #2b2b2b;
  color: #c0c0c0;
  display: flex;
  height: 34px;
  padding: auto 5px;
  align-items: center;
  float: left;
  
  &:hover {
    border: 1px solid black;
    background: black;
    color: white;
  }
`;

const FormGroupContainer = styled(FormGroup)`
  margin-left: 15px;
`;

class About extends React.PureComponent {
  state = {
    profileValueTemp: '',
    skillsValueTemp: '',
    contactValueTemp: '',
    emailValueTemp: '',
  }

  componentDidMount() {
    const { portfolio } = this.props
    this.setState({
      profileValueTemp: portfolio.about.profile.content,
      skillsValueTemp: portfolio.about.skills.content,
      contactValueTemp: portfolio.about.contact.content,
      emailValueTemp: portfolio.about.contact.email
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
    const { profileValueTemp, skillsValueTemp, contactValueTemp, emailValueTemp } = this.state
    const about = portfolio.about
    const isAuth = account.isAuth

    return (
      <AboutContainer>
        <Heading><FaUser/><Flip top cascade>Profile</Flip></Heading>
        {!isAuth ? (
          <Text>{about.profile.content}</Text>
        ) : (
          <TextArea
            value={profileValueTemp}
            onBlur={this.handleInputBlur('profile', 'content')}
            onChange={this.handleChangeText('profileValueTemp')}
          />
        )}
        <Heading><FaStar/><Flip top cascade>Skills</Flip></Heading>
        {!isAuth ? (
          <Text>{about.skills.content}</Text>
        ) : (
          <TextArea
            value={skillsValueTemp}
            onBlur={this.handleInputBlur('skills', 'content')}
            onChange={this.handleChangeText('skillsValueTemp')}
          />
        )}
        <Heading><FaEnvelope/><Flip top cascade>Contact</Flip></Heading>
        {!isAuth ? (
          <Text>{about.contact.content}</Text>
        ) : (
          <TextArea
            value={contactValueTemp}
            onBlur={this.handleInputBlur('contact', 'content')}
            onChange={this.handleChangeText('contactValueTemp')}
          />
        )}
        <FormGroupContainer>
          <InputGroup>
            <InputGroup.Button>
              <InputGroupButton><FaEnvelope/></InputGroupButton>
            </InputGroup.Button>
            {!isAuth ? (
              <EmailContainer>{about.contact.email}</EmailContainer>
            ) : (
              <FormControlContainer
                type="text"
                value={emailValueTemp}
                onBlur={this.handleInputBlur('contact', 'email')}
                onChange={this.handleChangeText('emailValueTemp')}
              />
            )}
          </InputGroup>
        </FormGroupContainer>
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