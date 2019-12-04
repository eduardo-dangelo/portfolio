import React from 'react';
import { Content, ImgContainer, ProfileContainer } from '../elements';

const AboutHeader = () => (
  <ProfileContainer>
    <ImgContainer>
      <img src={require('./img/img-perfil.jpg')} alt="perfil" />
    </ImgContainer>
    <Content>
      <h2>Eduardo D'Angelo</h2>
    </Content>
  </ProfileContainer>
);

export default AboutHeader;
