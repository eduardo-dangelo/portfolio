import React from 'react'
import { Input, Heading } from '../../elements'

class Header extends React.PureComponent {
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
            header.title.content
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

export default Header