import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const ParticlesContainer = styled.div`
  top: 0;
  left: 0;
  opacity: .5;
  width: 100%;
  height: 450px;
  position: fixed;
  
  @media all and (max-width: 1200px) {
    width: 1200px;
  }
`;

export const BgParticles = () => {
  return (
    <ParticlesContainer>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 1
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
      />
    </ParticlesContainer>
  )
};