import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 5px;
  background: transparent;
  transition: .2s linear;
  border: 1px dashed transparent;
  width: 260px;
  position: relative;
  
  &:hover, &:focus {
    border: 1px dashed white;
    outline: none;
  }
`;

class UserNameDisplay extends React.Component {
  state = {
    inputValue: 'Eduardo D`Angelo'
  }

  handleChange = (e) => {
    const { inputValue } = this.state

    if (inputValue.length <= 30 || inputValue.length === 31) {
      this.setState({
        inputValue: e.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <Input
          maxlength="50"
          placeholder="Your name here..."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default UserNameDisplay