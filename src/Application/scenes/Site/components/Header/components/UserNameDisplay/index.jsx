import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 5px;
  width: 260px;
  position: relative;
  transition: .2s linear;
  background: transparent;
  border: 1px dashed transparent;
  
  &:hover, &:focus {
    outline: none;
    border: 1px dashed white;
  }
`;

class UserNameDisplay extends React.PureComponent {
  state = {
    inputValueTemp: ''
  }

  componentDidMount() {
    const { header } = this.props

    this.setState({
      inputValueTemp: header.displayName,
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
    actions.updateDisplayName(e.target.value)
  }

  render() {
    const { isAuth, header } = this.props
    return (
      <div>
        {!isAuth && (
          <span>
            {header.displayName}
          </span>
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