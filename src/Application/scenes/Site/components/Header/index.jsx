import React from 'react'
import { connect } from 'react-redux'
import PageTitle from './components/PageTitle'
import { HeaderController } from '../Controllers'
import UserNameDisplay from './components/UserNameDisplay'
import SocialMediaLinks from './components/SocialMediaLinks'
import Fade from 'react-reveal/Fade'
import { Header as AppHeader, TopHeader, HeaderBody } from './elements'

class Header extends React.PureComponent {
  state = {
    showController: false
  }

  handleCardMouseHover = () => {
    const { account } = this.props
    const isAuth = account.isAuth

    if (!isAuth) {
      return null;
    }

    this.setState({
      showController: true
    })
  }

  handleCardMouseLeave = () => {
    // this.setState({
    //   showController: false
    // })
  }

  render() {
    const { account, header } = this.props
    const isAuth = account.isAuth
    const color = header.box.color
    const boxSize = header.box.size
    const bgColor = header.box.bgColor
    const textAlign = header.title.align
    const { showController, } = this.state

    return (
      <div onMouseOver={this.handleCardMouseHover} onMouseLeave={this.handleCardMouseLeave}>
        <AppHeader cssProps={{ boxSize, color, bgColor, textAlign }}>
          <TopHeader>
            <UserNameDisplay
              header={header}
              isAuth={isAuth}
            />
            <SocialMediaLinks
              header={header}
              isAuth={isAuth}
            />
          </TopHeader>
          <HeaderBody>
            <PageTitle
              header={header}
              isAuth={isAuth}
            />
          </HeaderBody>
        </AppHeader>
        {showController && isAuth && (
          <HeaderController header={header}/>
        )}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
    header: state.header
  }),
)(Header)