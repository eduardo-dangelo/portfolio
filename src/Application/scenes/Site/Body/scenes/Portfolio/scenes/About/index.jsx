import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaUser, FaStar, FaEnvelope, FaLink } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import Flip from 'react-reveal/Flip'
import withReveal from 'react-reveal/withReveal'
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import Link from './components/Link'


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
  float: left;
  padding: 6px;
  height: 34px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 0 3px 3px 0;
`;

const FormControlContainer = styled(FormControl)`
  float: left;
  height: 34px;
  padding: 6px;
  display: flex;
  max-width: 200px;
  align-items: center;
  border: 1px solid black;
  border-radius: 0 3px 3px 0;
`;

const InputGroupButton = styled(Button)`
  float: left;
  height: 34px;
  display: flex;
  color: #c0c0c0;
  padding: auto 5px;
  align-items: center;
  background: #2b2b2b;
  border: 1px solid black;
  
  &:hover {
    color: white;
    background: black;
    border: 1px solid black;
  }
`;

const FormGroupContainer = styled(FormGroup)`
  margin-left: 15px;
`;

const UnAuthLinkContainer = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: center;
`;

const UnAuthLink = styled.a`
  margin-right: 15px;
`;


class About extends React.Component {
  state = {
    profileValueTemp: '',
    skillsValueTemp: '',
    contactValueTemp: '',
    emailValueTemp: '',
    linksValueTemp: [],
  }

  componentDidMount() {
    const { portfolio } = this.props
    this.setState({
      profileValueTemp: portfolio.about.profile.content,
      skillsValueTemp: portfolio.about.skills.content,
      contactValueTemp: portfolio.about.contact.content,
      emailValueTemp: portfolio.about.contact.email,
      linksValueTemp: portfolio.about.links,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { portfolio } = this.props
    const links = portfolio.about.links
    const linksNextProps = nextProps.portfolio.about.links

    if (links.length !== linksNextProps.length) {
      this.setState({
        linksValueTemp: linksNextProps
      })
    }
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

  updateLinksTempValue = () => {
    const { portfolio } = this.props
    const links = portfolio.about.links
    this.setState({
      linksValueTemp: links
    })
  }

  renderLinksComponent = () => {
    const { portfolio, account, actions } = this.props
    const { linksValueTemp } = this.state
    const links = portfolio.about.links
    const isAuth = account.isAuth

    if (links.length === 0) {
      return null;
    }

    if (!isAuth) {
      return (
        <UnAuthLinkContainer>
          {linksValueTemp.map((link, key) => {
            return (
              <UnAuthLink key={key} href={link.href} target="_blank">
                {link.label}
              </UnAuthLink>
            )
          })}
        </UnAuthLinkContainer>
      )
    }

    return (
      <div>
        {linksValueTemp.map((link, key) => {
          return (
            <Link
              key={key}
              link={link}
              linkIndex={key}
              actions={actions}
              links={linksValueTemp}
              onRemove={this.updateLinksTempValue}
            />
          )
        })}
        <Button onClick={this.handleAddLink}>
          Add link
        </Button>
      </div>
    )
  }

  handleAddLink = () => {
    const { actions } = this.props
    actions.addLink()
  }

  render() {
    const { portfolio, account } = this.props
    const { profileValueTemp, skillsValueTemp, contactValueTemp, emailValueTemp } = this.state
    const about = portfolio.about
    const isAuth = account.isAuth

    return (
      <AboutContainer>
        <Heading>
          <FaUser/><Flip top cascade>Profile</Flip>
        </Heading>
        {!isAuth ? (
          <Text>{about.profile.content}</Text>
        ) : (
          <TextArea
            value={profileValueTemp}
            onBlur={this.handleInputBlur('profile', 'content')}
            onChange={this.handleChangeText('profileValueTemp')}
          />
        )}
        <Heading>
          <FaStar/><Flip top cascade>Skills</Flip>
        </Heading>
        {!isAuth ? (
          <Text>{about.skills.content}</Text>
        ) : (
          <TextArea
            value={skillsValueTemp}
            onBlur={this.handleInputBlur('skills', 'content')}
            onChange={this.handleChangeText('skillsValueTemp')}
          />
        )}
        <Heading>
          <FaEnvelope/><Flip top cascade>Contact</Flip>
        </Heading>
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
        <Heading>
          <FaLink/><Flip top cascade>Links</Flip>
        </Heading>
        {this.renderLinksComponent()}
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