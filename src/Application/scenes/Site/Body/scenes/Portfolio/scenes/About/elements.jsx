import styled, { keyframes } from 'styled-components'
import withReveal from 'react-reveal/withReveal'
import Flip from 'react-reveal/Flip'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import React from 'react'

const AboutContainer = styled.div`
  padding: 15px;
  flex-shrink: 0;
  background: #dfd6ab;
  box-sizing: padding-box;
`;

const Container = styled.div`
  max-width: 700px;
  margin: auto;
`;

const Text = styled.p`
  margin: 15px;
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
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const EmailContainer = styled.div`
  float: left;
  padding: 6px;
  height: 34px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 0 3px 3px 0;
`;

const FormControlContainer = styled(FormControl)`
  float: left;
  height: 34px;
  padding: 6px;
  display: flex;
  max-width: 200px;
  align-items: center;
  border: 1px solid black;
  border-radius: 0 3px 3px 0;
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
  
  &:hover {
    color: white;
    background: black;
    border: 1px solid black;
  }
`;

const FormGroupContainer = styled(FormGroup)`
  margin-left: 15px;
`;

const UnAuthLinkContainer = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: center;
`;

const UnAuthLink = styled.a`
  margin-right: 15px;
`;

export {
  AboutContainer,
  Container,
  Text,
  TextArea,
  InputGroupButton,
  Heading,
  EmailContainer,
  FormControlContainer,
  FormGroupContainer,
  UnAuthLinkContainer,
  UnAuthLink,
}