import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from './components/PageTitle'
import { HeaderController } from '../Controllers'
import UserNameDisplay from './components/UserNameDisplay'
import SocialMediaLinks from './components/SocialMediaLinks'
import { Header as AppHeader, TopHeader, HeaderBody, Heading, OusideClickContainer } from './elements'
import { actions as headerActions } from '../../../../services/redux/headerReducer'

class Header extends React.PureComponent {
  state = {
    color: '#ffffff',
    bgColor: '#001b44',
    boxSize: 'medium',
    textAlign: 'left',
    showController: false
  }

  handleInputAndControllerBlur = () => {
    this.setState({
      inputActive: false,
      showTextController: false
    })
  }

  handleTextAlignChange = (value) => () => {
    this.setState({
      textAlign: value,
      inputActive: true
    })
  }

  handleTextSizeChange = (value) => () => {
    this.setState({
      textSize: value,
      inputActive: true
    })
  }

  handleBoxSizeChange = (value) => () => {
    const { onBoxSizeChange } = this.props
    this.setState({
      boxSize: value,
      inputActive: false
    })
    onBoxSizeChange(value)
  }

  handleToggleBold = () => {
    this.setState(preState => ({
      bold: !preState.bold,
      inputActive: true
    }))
  }

  handleToggleItalic = () => {
    this.setState(preState => ({
      italic: !preState.italic,
      inputActive: true
    }))
  }

  handleCardMouseHover = () => {
    this.setState({
      showController: true
    })
  }

  handleCardMouseLeave = () => {
    this.setState({
      showController: false
    })
  }

  updateValue = (item) => (value) => {
    this.setState({
      [item]: value.hex
    })
  }

  onBoxSizeChange = (value) => {
    this.setState({
      boxSize: value,
    })
  }

  render() {
    const { account, header, actions } = this.props
    const isAuth = account.isAuth
    const {
      color,
      boxSize,
      bgColor,
      textAlign,
      showController,
    } = this.state

    return (
      <div onMouseOver={this.handleCardMouseHover} onMouseLeave={this.handleCardMouseLeave}>
        {showController && isAuth && (
          <HeaderController
            header={header}
            actions={actions}
            onColorChange={this.updateValue('color')}
            onBgColorChange={this.updateValue('bgColor')}
            onToggleBold={this.handleToggleBold}
            onToggleItalic={this.handleToggleItalic}
            onBoxSizeChange={this.handleBoxSizeChange}
            onTextSizeChange={this.handleTextSizeChange}
            OnTextAlignChange={this.handleTextAlignChange}
            cssProps={{ textAlign, boxSize, bgColor, color }}
          />
        )}
        <AppHeader cssProps={{ boxSize, color, bgColor, textAlign }}>
          <TopHeader>
            <UserNameDisplay
              header={header}
              isAuth={isAuth}
              actions={actions}
            />
            <SocialMediaLinks
              header={header}
              isAuth={isAuth}
              actions={actions}
              cssProps={{ color }}
            />
          </TopHeader>
          <HeaderBody>
            <PageTitle
              header={header}
              isAuth={isAuth}
              actions={actions}
            />
          </HeaderBody>
        </AppHeader>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
    header: state.header
  }),
  (dispatch) => ({
    actions: bindActionCreators(headerActions, dispatch)
  })
)(Header)