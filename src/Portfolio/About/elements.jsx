import React from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

export const AboutContainer = styled.div`
  padding: 15px;
  flex-shrink: 0;
  background: white;
  box-sizing: padding-box;
`;

export const Container = styled.div`
  max-width: 700px;
  margin: 45px auto;
`;

export const Text = styled.p`
  margin: 15px;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
  
  strong {
    font-weight: 600;
  }
`;

export const flash = keyframes`
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

export const TextArea = styled.textarea`
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

export const Heading = styled.h3`
  display: flex;
  font-weight: 600;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

export const EmailContainer = styled.div`
  height: 34px;
  display: flex;
  padding: 0 10px;
  font-weight: 500;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px 0 0 3px;
`;

export const InputGroupButton = styled(Button)`
  float: left;
  height: 34px;
  display: flex;
  color: #c0c0c0;
  padding: auto 5px;
  align-items: center;
  background: #2b2b2b;
  border: 1px solid black;
  margin-right: 10px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    width: 200%;
    height: 100%;
    transform: rotateZ(-45deg);
    background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,0));
    position: absolute;
    left: -200%;
    transition: .4s ease;
    opacity: .2;
  }
  
  &:hover, &:active, &:focus {
    color: white;
    background: black !important;
    border: 1px solid black;
    
    &:before {
      left: 100%;
    }
  }
`;

export const FormGroupContainer = styled(FormGroup)`
  max-width: 350px;
  margin-left: 15px;
  position: relative;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > div:first-child {
    margin-right: 10px;
  }
`;

export const UnAuthLinkContainer = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: center;
  position: relative;
`;

export const UnAuthLink = styled.a`
  font-size: 20px;
  font-weight: 400;
  margin-right: 15px;
  transition: .3s ease;
  text-decoration: none;
  position: relative;
  
  &:before {
    content: "";
    border-bottom: 2px solid;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 1%;
    transition: .3s ease;
  }
  
  &:hover {
    text-decoration: none;
    
    &:before {
      width: 100%;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: flex-start;
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  
  img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 1px 2px 16px rgba(0,0,0,0.1);
  }
`;

export const Content = styled.div`
  padding: 0 15px;
  
  h1 {
    margin-top: 0;
    font-weight: 300;
    font-size: 2.5em;
    margin-bottom: 3px;
  }
`;