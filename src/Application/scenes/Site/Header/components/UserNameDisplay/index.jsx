import React from 'react';
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, NameContainer } from './elements';
import { actions as headerActions } from '../../reducer';

class UserNameDisplay extends React.PureComponent {
  state = {
    inputValueTemp: ''
  }

  componentDidMount() {
    const { header } = this.props;

    this.setState({
      inputValueTemp: header.name.content,
    });
  }

  handleInputChange = (e) => {
    const { inputValueTemp } = this.state;

    if (inputValueTemp.length <= 30 || inputValueTemp.length === 31) {
      this.setState({
        inputValueTemp: e.target.value
      });
    }
  }

  handleInputBlur = (e) => {
    const { actions } = this.props;
    actions.updateHeaderProps('name', 'content', e.target.value);
  }

  render() {
    const { isAuth, header } = this.props;

    if (!header.display.name) {
      return <div/>;
    }

    return (
      <NameContainer>
        {!isAuth && (
          <Flip top>
            {header.name.content}
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
      </NameContainer>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(headerActions, dispatch)
  })
)(UserNameDisplay);
