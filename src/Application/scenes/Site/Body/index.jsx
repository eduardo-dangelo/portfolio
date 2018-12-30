import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Portfolio from './scenes/Portfolio';
import Documentation from './scenes/Documentation';

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  clear: both;
  position: relative;
`;

class Body extends React.PureComponent {
  renderBodyByType = () => {
    const { body } = this.props

    switch(body.bodyType) {
      case 'portfolio':
        return <Portfolio/>
      case 'documentation':
        return <Documentation/>
      default:
        return null
    }
  }

  render() {
    return (
      <BodyContainer>
        {this.renderBodyByType()}
      </BodyContainer>
    )
  }
}

export default connect(
  (state) => ({
    body: state.body
  }),
)(Body);
