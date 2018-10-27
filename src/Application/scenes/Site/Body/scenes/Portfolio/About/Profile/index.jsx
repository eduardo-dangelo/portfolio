import React from 'react'
import { Heading, Text } from '../elements'
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
          I am a highly talented and ambitious front end developer, with a strong
          background in graphic design and a proven record of delivering
          creative and innovative solutions. My key skills are
          communication skills, excellent IT skills, professional approach
          to time, costs, deadlines and an understanding of latest
          trends and their role within a commercial environment. Always
          looking for projects where I can use my skills, be challenged
          and grow professionally.
        </Text>
      </div>
    )
  }
}

export default Profile