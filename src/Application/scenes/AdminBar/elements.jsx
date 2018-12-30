import styled, { keyframes } from 'styled-components'

export const Bar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #cdd2ef;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 15px;
  transition: .3s ease;
  border: 1px solid #3a3a3a;
  box-shadow: inset 0 1px 5px rgba(0,0,0,0.2);
  
  &:hover, &:focus {
    box-shadow: inset 0 1px 6px rgba(0,0,0,0.4);
  }
`;

export const Form = styled.div`
  display: flex;
  padding: 0 15px;
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  padding: 6px 15px;
  align-items: center;
  transition: .2s ease;
  background: transparent;
  border: 1px solid #3a3a3a;
  justify-content: space-between;
  
  &:hover {
    box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
  }
`;

export const Title = styled.h4`
  padding: 0 15px;
  font-weight: lighter;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: ${rotate360} 1s linear infinite;
`;

export const Error = styled.span`
  color: #7a0000;
  padding: 10px 15px;
`;