import React from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: flex-start;
`;

const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid black;
  
  img {
    width: 100%;
    border-radius: 50%;
    box-shadow: inset 0 2px 4px rgba(0,0,0,1);
  }
`;

const Content = styled.div`
  padding: 0 15px;
  
  h1 {
    margin-top: 0;
    font-weight: 300;
    font-size: 2.5em;
    margin-bottom: 3px;
  }
`;

class AboutHeader extends React.PureComponent {
  render() {
    return (
      <div>
        <ProfileContainer>
          <ImgContainer>
            <img src={require('./img/img-perfil.jpg')} alt="perfil"/>
          </ImgContainer>
          <Content>
            <h1>Eduardo D'Angelo</h1>
          </Content>
        </ProfileContainer>
      </div>
    )
  }
}

export default AboutHeader