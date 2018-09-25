import React from 'react'
import Flip from 'react-reveal/Flip'
import { bindActionCreators } from 'redux'
import { Input, Heading } from '../../elements'
import connect from 'react-redux/es/connect/connect'
import { actions as headerActions } from '../../../../../../services/redux/headerReducer'

class PageTitle extends React.PureComponent {
  state = {
    inputValueTemp: ''
  }

  componentDidMount() {
    const { header } = this.props
    this.setState({
      inputValueTemp: header.title.content
    })
  }

  handleInputBlur = (e) => {
    const { actions } = this.props
    actions.updateHeaderProps('title', 'content', e.target.value)
  }

  handleChangeTitle = (e) => {
    this.setState({
      inputValueTemp: e.target.value
    })
  }

  render() {
    const { isAuth, header } = this.props
    const { inputValueTemp } = this.state

    return (
      <div>
        <Heading cssProps={{ ...header.title }}>
          {!isAuth ? (
            <Flip top cascade>
              {header.title.content}
            </Flip>
          ) : (
            <Input
              name="test"
              value={inputValueTemp}
              onBlur={this.handleInputBlur}
              cssProps={{ ...header.title }}
              onChange={this.handleChangeTitle}
            />
          )}
        </Heading>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(headerActions, dispatch)
  })
)(PageTitle)