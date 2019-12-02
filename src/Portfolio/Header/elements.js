import styled from 'styled-components';
import { style } from '../data';

export const Container = styled.div`
  color: #fafafa;
  padding: 15px;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: ${style.boxShadowInset};
  background: linear-gradient(315deg, #152552, #101023);

  @media all and (max-width: 900px) {
    height: 100vh;
  }
`;

export const Name = styled.div`
  text-shadow: ${style.textShadow};
  opacity: 0.8;
  transition: 0.3s ease;
  cursor: default;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  font-weight: 100;
  align-self: center;
  grid-column-start: 1;
  grid-column-end: span col3-end;
  grid-row-start: 2;
  grid-row-end: 2;
  text-shadow: ${style.textShadow};
  opacity: 0.8;
  transition: 0.3s ease;
  cursor: default;

  &:hover {
    opacity: 1;
  }
`;

export const Links = styled.div`
  grid-column-start: 3;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: start;

  a {
    padding: 5px;
    cursor: pointer;
    color: white;
    opacity: 0.8;
    transition: 0.3s ease;
    font-size: 1.1em;
    text-shadow: ${style.textShadow};
    border-radius: ${style.outlineBorderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1px;

    &:focus {
      outline: none;
      box-shadow: ${style.outlineBoxShadow};
      background: ${style.outlineBg};  
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const CallToAction = styled.button`
  grid-column-start: 2;
  grid-row-start: 3;
  align-self: end;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s ease;
  background: transparent;
  border: none;
  z-index: 10;
  border-radius: ${style.outlineBorderRadius};

  span {
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: ${style.outlineBoxShadow};
    background: ${style.outlineBg};
    opacity: 1;
  }
`;

export const Icon = styled.div`
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 15px;
  font-size: 1.3em;
`;