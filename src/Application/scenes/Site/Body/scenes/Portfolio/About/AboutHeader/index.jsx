import React from 'react';
import { Content, ImgContainer, ProfileContainer } from '../elements';

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