import React from 'react'
import styled from 'styled-components'
import { FaUser, FaStar, FaEnvelope, FaLink } from 'react-icons/fa'
import { connect } from 'react-redux'

const AboutContainer = styled.div`
  background: #dfd6ab;
  padding: 15px;
  flex-shrink: 0;
`;

const Text = styled.p`
  margin-left: 15px;
`;

class About extends React.PureComponent {
  render() {
    const { portfolio, account } = this.props
    const about = portfolio.about
    const isAuth = account.isAuth

    return (
      <AboutContainer>
        <h3><FaUser/> Profile</h3>
        <Text>{about.profile}</Text>
        <h3><FaStar/> Skills</h3>
        <Text>{about.skills}</Text>
        <h3><FaEnvelope/> Contact</h3>
        <Text>{about.contact.text}</Text>
        <Text>{about.contact.email}</Text>
        <h3><FaLink/> Links</h3>
        <Text>links here...</Text>
      </AboutContainer>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
    portfolio: state.portfolio
  })
)(About)