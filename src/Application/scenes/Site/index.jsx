import React from 'react'
import Header from './components/Header'
import { connect } from 'react-redux'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { actions as authActions } from '../../redux/userAccountReducer'

class Site extends React.Component {
  render() {
    const { account, actions } = this.props
    const isAuth = account.isAuth

    return (
      <div>
        <Header/>
        <h2>
          {isAuth ? 'authetticaded' : 'not authenticaded'}
        </h2>
        <ButtonToolbar>
          <ButtonGroup>
            <Button bsStyle={isAuth ? 'info' : 'default'} onClick={() => actions.auth(true)}>
              authetticaded
            </Button>
            <Button bsStyle={!isAuth ? 'info' : 'default'} onClick={() => actions.auth(false)}>
              not authenticaded
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
  }),
  (dispatch) => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(Site)
