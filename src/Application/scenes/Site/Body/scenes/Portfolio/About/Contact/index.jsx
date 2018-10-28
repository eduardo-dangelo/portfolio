import React from 'react'
import { Container, EmailContainer, FormControlContainer, FormGroupContainer, Heading, InputGroupButton, Text, TextArea } from '../elements'
import { FaEnvelope, FaCopy } from 'react-icons/fa'
import Flip from 'react-reveal/Flip'
import { InputGroup } from 'react-bootstrap'

class Contact extends React.PureComponent {
  render() {
    return (
      <div>
        <Heading>
          <FaEnvelope/><Flip top cascade>Contact</Flip>
        </Heading>
        <Text>Contact me via email or any of my social-media</Text>
        <FormGroupContainer>
          <InputGroup>
            <EmailContainer>eduardodonatodangelo@gmail.com</EmailContainer>
            <InputGroup.Button>
              <InputGroupButton><FaCopy/></InputGroupButton>
            </InputGroup.Button>
          </InputGroup>
        </FormGroupContainer>
      </div>
    )
  }
}

export default Contact