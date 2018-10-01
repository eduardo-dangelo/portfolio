import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { actions as bodyActions } from '../Body/reducer'
import { actions as accountActions } from '../../AdminBar/reducer'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'

const AlignCenterContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid orange;
`

class Footer extends React.PureComponent {
  render() {
    const { account, body, actions } = this.props
    const isAuth = account.isAuth
    const bodyType = body.bodyType

    return (
      <div>
        <AlignCenterContainer>
          <h2>
            {isAuth ? 'authenticated' : 'not authenticated'}
          </h2>
          <ButtonToolbar>
            <ButtonGroup>
              <Button
                onClick={() => actions.account.auth(true)}
                bsStyle={isAuth ? 'info' : 'default'}
              >
                authenticate
              </Button>
              <Button
                onClick={() => actions.account.auth(false)}
                bsStyle={!isAuth ? 'info' : 'default'}
              >
                log out
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <h3>Body type</h3>
          <ButtonToolbar>
            <ButtonGroup>
              <Button
                onClick={() => actions.body.selectBodyType('portfolio')}
                bsStyle={bodyType === 'portfolio' ? 'info' : 'default'}
              >
                Portfolio
              </Button>
              <Button
                onClick={() => actions.body.selectBodyType('documentation')}
                bsStyle={bodyType === 'documentation' ? 'info' : 'default'}
              >
                Documentation
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
    body: state.body,
  }),
  (dispatch) => ({
    actions: {
      account: bindActionCreators(accountActions, dispatch),
      body: bindActionCreators(bodyActions, dispatch)
    }
  })
)(Footer)