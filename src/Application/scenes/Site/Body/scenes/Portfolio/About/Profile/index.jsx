import React from 'react';
import Flip from 'react-reveal/Flip';
import { FaUser } from 'react-icons/fa';
import { Heading, Text } from '../elements';

class Profile extends React.PureComponent {
  render() {
    return (
      <div>
        <Heading>
          <FaUser/><Flip top cascade>Profile</Flip>
        </Heading>
        <Text>
          I am a talented and ambitious full-stack software developer,
          with a proven record of delivering creative and innovative
          solutions and a strong background in front-end & graphic design.
          My key skills are communication skills, excellent IT skills,
          professional approach to time, costs, deadlines and an understanding
          of latest trends and their role within a commercial environment. Always
          looking for projects where I can use my skills, be challenged
          and grow professionally.
        </Text>
      </div>
    );
  }
}

export default Profile;
