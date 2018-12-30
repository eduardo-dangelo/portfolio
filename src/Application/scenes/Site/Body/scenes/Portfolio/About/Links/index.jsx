import React from 'react'
import { FaLink } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'
import { Heading, UnAuthLink, UnAuthLinkContainer } from '../elements'

class Links extends React.PureComponent {
  render() {
    return (
      <div>
        <Heading>
          <FaLink/><Flip top cascade>Links</Flip>
        </Heading>
        <UnAuthLinkContainer>
          <UnAuthLink href={''} target="_blank">
            Cv
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
    )
  }
}

export default Links