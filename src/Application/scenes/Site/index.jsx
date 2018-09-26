import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from './Header'
import { bindActionCreators } from 'redux'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import { actions as authActions } from '../AdminBar/reducer'
import Body from './Body'
import Footer from './Footer'

const AlignCenterContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  border: 1px solid orange;
  flex-direction: column;
`

class Site extends React.Component {
  render() {
    const { account, actions } = this.props
    const isAuth = account.isAuth

    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
        <AlignCenterContainer>
          <h2>
            {isAuth ? 'authenticated' : 'not authenticated'}
          </h2>
          <ButtonToolbar>
            <ButtonGroup>
              <Button bsStyle={isAuth ? 'info' : 'default'} onClick={() => actions.auth(true)}>
                authenticate
              </Button>
              <Button bsStyle={!isAuth ? 'info' : 'default'} onClick={() => actions.auth(false)}>
                log out
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </AlignCenterContainer>
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
