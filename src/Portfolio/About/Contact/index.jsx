import React, { useState } from 'react';
import {
  Text,
  FlexBox,
  Heading,
  EmailContainer,
  InputGroupButton,
  FormGroupContainer
} from '../elements';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipBoard = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div>
      <Heading>
        <FaEnvelope />
        <Flip top cascade>
          Contact
        </Flip>
      </Heading>
      <Text>Contact me via email or any of my social-media</Text>
      <FormGroupContainer>
        <FlexBox>
          <InputGroup>
            <EmailContainer>eduardodonatodangelo@gmail.com</EmailContainer>
            <InputGroup.Button>
              <CopyToClipboard
                text={'eduardodonatodangelo@gmail.com'}
                onCopy={handleCopyToClipBoard}
              >
                <InputGroupButton>
                  <FaCopy />
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
};

export default Contact;
