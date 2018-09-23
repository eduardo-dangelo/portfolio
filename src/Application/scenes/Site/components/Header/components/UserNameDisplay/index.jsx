import React from 'react'
import { Input } from './elements'
import Flip from 'react-reveal/Flip'

class UserNameDisplay extends React.PureComponent {
  state = {
    inputValueTemp: ''
  }

  componentDidMount() {
    const { header } = this.props

    this.setState({
      inputValueTemp: header.displayName.content,
    })
  }

  handleInputChange = (e) => {
    const { inputValueTemp } = this.state

    if (inputValueTemp.length <= 30 || inputValueTemp.length === 31) {
      this.setState({
        inputValueTemp: e.target.value
      })
    }
  }

  handleInputBlur = (e) => {
    const { actions } = this.props
    actions.updateHeaderProps('displayName', 'content', e.target.value)
  }

  render() {
    const { isAuth, header } = this.props
    return (
      <div>
        {!isAuth && (
          <Flip top>
            {header.displayName.content}
          </Flip>
        )}
        {isAuth && (
          <Input
            maxlength="50"
            placeholder=""
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            value={this.state.inputValueTemp}
          />
        )}
      </div>
    )
  }
}

export default UserNameDisplay