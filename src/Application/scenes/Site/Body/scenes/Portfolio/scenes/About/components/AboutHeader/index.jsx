import React from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-start;
`;

const ImgContainer = styled.div`
  //float: right;
  max-width: 100px;
  
  img {
    width: 100%;
    border: 1px solid black;
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  }
`;

class AboutHeader extends React.Component {
  render() {
    return (
      <div>
        <ProfileContainer>
          <ImgContainer>
            <img src={require('./img/img-perfil.jpg')} alt="perfil"/>
          </ImgContainer>
          <div>
            <h4>Eduardo D'Angelo</h4>
            <p>10/07/1988</p>
            <p>Brazilian / Italian</p>
          </div>
        </ProfileContainer>
      </div>
    )
  }
}

export default AboutHeader