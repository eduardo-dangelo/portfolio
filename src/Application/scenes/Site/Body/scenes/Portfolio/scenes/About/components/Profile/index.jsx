import React from 'react'
import { Container, Heading, Text, TextArea } from '../../elements'
import { FaUser } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'

class Profile extends React.PureComponent {
  render() {
    return (
      <div>
        <Heading>
          <FaUser/><Flip top cascade>Profile</Flip>
        </Heading>
        <Text>
          I am a highly talented and ambitious front end developer, application
          developer and graphic designer with a proven record of delivering
          creative and innovative design solutions. My key skills are
          communication skills, excellent IT skills, an understanding of latest
          trends and their role within a commercial environment and professional
          approach to time, costs and deadlines. I am currently looking a role
          matching my profile where I can use my skills, be challenged
          and grow professionally.
        </Text>
      </div>
    )
  }
}

export default Profile