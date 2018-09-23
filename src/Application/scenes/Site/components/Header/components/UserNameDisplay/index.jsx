import React from 'react'
import { Input } from './elements'
import Fade from 'react-reveal/Fade'

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
          <Fade left>
            {header.displayName.content}
          </Fade>
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