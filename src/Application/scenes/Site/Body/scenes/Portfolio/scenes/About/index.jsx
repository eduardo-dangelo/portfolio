import React from 'react'
import styled from 'styled-components'
import { FaUser, FaStar, FaEnvelope, FaLink } from 'react-icons/fa'

const AboutContainer = styled.div`
  background: #999170;
  padding: 15px;
  flex-shrink: 0;
`;

class About extends React.PureComponent {
  render() {
    return (
      <AboutContainer>
        <h3><FaUser/> Profile</h3>
        <p>profile content here</p>
        <h3><FaStar/> Skills</h3>
        <p>Skills paragraph here</p>
        <h3><FaEnvelope/> Contact</h3>
        <p>Skills paragraph here</p>
        <h3><FaLink/> Links</h3>
        <p>links here...</p>
      </AboutContainer>
    )
  }
}

export default About