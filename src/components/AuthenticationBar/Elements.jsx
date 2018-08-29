import styled from 'styled-components'

const Bar = styled.div`
  background: #cdd2ef;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  //padding: 0 15px;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 1px solid #3a3a3a;
  margin-right: 15px;
  padding: 8px;
  transition: .3s ease;
  box-shadow: inset 0 1px 5px rgba(0,0,0,0.2);
  
  &:hover, &:focus {
    box-shadow: inset 0 1px 6px rgba(0,0,0,0.4);
  }
`;

const Form = styled.div`
  padding: 0 15px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background: transparent;
  border: 1px solid #3a3a3a;
  transition: .2s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
  }
`;

const Title = styled.h3`
  padding: 0 15px;
  font-weight: lighter;
`;

export { Bar, Title, Input, Button, Form }