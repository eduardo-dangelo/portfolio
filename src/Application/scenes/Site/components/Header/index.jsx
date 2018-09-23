import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from './components/PageTitle'
import { HeaderController } from '../Controllers'
import UserNameDisplay from './components/UserNameDisplay'
import SocialMediaLinks from './components/SocialMediaLinks'
import { Header as AppHeader, TopHeader, HeaderBody } from './elements'
import { actions as headerActions } from '../../../../services/redux/headerReducer'

class Header extends React.PureComponent {
  state = {
    showController: false
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

  render() {
    const { account, header, actions } = this.props
    const isAuth = account.isAuth
    const color = header.box.color
    const boxSize = header.box.size
    const bgColor = header.box.bgColor
    const textAlign = header.title.align
    const { showController, } = this.state

    return (
      <div onMouseOver={this.handleCardMouseHover} onMouseLeave={this.handleCardMouseLeave}>
        {showController && isAuth && (
          <HeaderController header={header} actions={actions}/>
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