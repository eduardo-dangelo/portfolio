import React from 'react';
import Flip from 'react-reveal/Flip';
import { FaLink } from 'react-icons/fa';
import { Heading, UnAuthLink, UnAuthLinkContainer } from '../elements';

class Links extends React.PureComponent {
  render() {
    return (
      <div>
        <Heading>
          <FaLink/><Flip top cascade>Links</Flip>
        </Heading>
        <UnAuthLinkContainer>
          <UnAuthLink href={'https://drive.google.com/open?id=1vhMPXXthiQ5LU20veomh05rINjjECYdV'} target="_blank">
            Resume
          </UnAuthLink>
          <UnAuthLink href={'https://www.linkedin.com/in/eduardo-d-angelo-profile/'} target="_blank">
            LinkedIn
          </UnAuthLink>
          <UnAuthLink href={'http://github.com/eduardo-dangelo'} target="_blank">
            Github
          </UnAuthLink>
          <UnAuthLink href={'https://codepen.io/eduardodangelo'} target="_blank">
            Codepen
          </UnAuthLink>
        </UnAuthLinkContainer>
      </div>
    );
  }
}

export default Links;
