import React from 'react'
import { Container, EmailContainer, FormControlContainer, FormGroupContainer, Heading, InputGroupButton, Text, TextArea } from '../../elements'
import { FaEnvelope } from 'react-icons/fa'
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
            <InputGroup.Button>
              <InputGroupButton><FaEnvelope/></InputGroupButton>
            </InputGroup.Button>
            <EmailContainer>eduardodonatodangelo@gmail.com</EmailContainer>
          </InputGroup>
        </FormGroupContainer>
      </div>
    )
  }
}

export default Contact