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
  border-radius: 50%;
  
  img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 1px 2px 16px rgba(0,0,0,0.1);
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
            <h2>Eduardo D'Angelo</h2>
          </Content>
        </ProfileContainer>
      </div>
    )
  }
}

export default AboutHeader