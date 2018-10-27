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
            Example link
          </UnAuthLink>
        </UnAuthLinkContainer>
      </div>
    )
  }
}

export default Links