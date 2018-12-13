import React from 'react';
import {
  EmailContainer, FlexBox,
  FormGroupContainer,
  Heading,
  InputGroupButton,
  Text,
} from '../elements';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Contact extends React.PureComponent {
  state = {
    copied: false,
  }

  render() {
    const { copied } = this.state;

    return (
      <div>
        <Heading>
          <FaEnvelope/><Flip top cascade>Contact</Flip>
        </Heading>
        <Text>Contact me via email or any of my social-media</Text>
        <FormGroupContainer>
          <FlexBox>
            <InputGroup>
              <EmailContainer>eduardodonatodangelo@gmail.com</EmailContainer>
              <InputGroup.Button>
                <CopyToClipboard
                  text={'eduardodonatodangelo@gmail.com'}
                  onCopy={this.handleCopy}
                >
                  <InputGroupButton>
                    <FaCopy/>
                  </InputGroupButton>
                </CopyToClipboard>
              </InputGroup.Button>
            </InputGroup>
            <Fade bottom opposite when={copied}>
              copied
            </Fade>
          </FlexBox>
        </FormGroupContainer>
      </div>
    );
  }

  handleCopy = () => {
    this.setState({ copied: true });

    setTimeout(() => this.setState({ copied: false }), 1000);
  }
}

export default Contact