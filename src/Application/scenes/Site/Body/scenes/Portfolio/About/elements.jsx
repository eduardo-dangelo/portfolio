import React from 'react'
import { Button, FormGroup } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'

const AboutContainer = styled.div`
  padding: 15px;
  flex-shrink: 0;
  background: white;
  box-sizing: padding-box;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 45px auto;
`;

const Text = styled.p`
  margin: 15px;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
  
  strong {
    font-weight: 600;
  }
`;

const flash = keyframes`
  0% {
    border: 1px dashed transparent;
  }
  
  50% {
    border: 1px dashed;
  }

  100% {
    border: 1px dashed transparent;
  }
`;

const TextArea = styled.textarea`
  z-index: 0;
  width: calc(100% - 15px);
  overflow: auto;
  margin: 0 15px;
  resize: vertical;
  padding: 8px 5px;
  transition: .3s ease;
  box-sizing: padding-box;
  background: transparent;
  border: 1px dashed transparent;
  animation: ${flash} 2s ease-out;
  
  &:focus, &:hover {
    outline: none;
    border: 1px dashed;
  }
`;

const Heading = styled.h3`
  display: flex;
  font-weight: 600;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const EmailContainer = styled.div`
  height: 34px;
  display: flex;
  padding: 0 10px;
  font-weight: 500;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px 0 0 3px;
`;

const InputGroupButton = styled(Button)`
  float: left;
  height: 34px;
  display: flex;
  color: #c0c0c0;
  padding: auto 5px;
  align-items: center;
  background: #2b2b2b;
  border: 1px solid black;
  margin-right: 10px;
  
  &:hover, &:active, &:focus {
    color: white;
    background: black;
    border: 1px solid black;
  }
`;

const FormGroupContainer = styled(FormGroup)`
  max-width: 350px;
  margin-left: 15px;
  position: relative;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > div:first-child {
    margin-right: 10px;
  }
`;

const UnAuthLinkContainer = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: center;
`;

const UnAuthLink = styled.a`
  font-size: 20px;
  font-weight: 400;
  margin-right: 15px;
  transition: .3s ease;
`;

export {
  Text,
  Heading,
  FlexBox,
  TextArea,
  Container,
  UnAuthLink,
  AboutContainer,
  EmailContainer,
  InputGroupButton,
  FormGroupContainer,
  UnAuthLinkContainer,
}