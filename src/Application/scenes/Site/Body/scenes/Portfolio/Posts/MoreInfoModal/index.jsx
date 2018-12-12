import React from 'react'
import GifType from './GifType'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Button, ButtonBar } from '../Post'

const DarkScreen = styled.div`
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
`;

const Modal = styled.div`
  z-index: 6;
  padding: 20px;
  color: lightgray;
  position: relative;
  border-radius: 4px;
  background: #1b1b1b;
  border: 1px solid white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.7);
`;

const ModalHeader = styled.div`
  display: flex;
  padding-bottom: 5px;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    margin: 0;
    font-weight: 300;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
`;

const ModalBody = styled.div`
  padding: 0;
  width: 100%;
`;

const ImgsContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  background: lightgrey;
  border: 1px solid white;
  box-shadow: 0 2px 22px rgba(0,0,0,0.6);
  
  img {
    width: 100%;
    position: relative !important;
  }
`;

const Content = styled.div`
  
`;

class MoreInfoModal extends React.PureComponent {
  handleOnClose = () => {
    console.log('calle too')
    this.props.onClose()
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <ModalContainer>
          <DarkScreen onClick={this.handleOnClose}/>
          <Fade>
            <Modal>
              <ModalHeader>
                <h1>
                  <Flip top cascade>
                    {post.title}
                  </Flip>
                </h1>
                <CloseButton>
                  <FaTimes/>
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <ImgsContainer>
                  <GifType type={post.key}/>
                </ImgsContainer>
                <Content>
                  <p>
                    {post.description}
                  </p>
                  <ButtonBar>
                    <a href={post.demo} target="_blank">
                      <Button>
                        <Flip top cascade>
                          Demo
                        </Flip>
                      </Button>
                    </a>
                    <a href={post.github} target="_blank">
                      <Button onClick={this.handleToggleModal}>
                        <Flip top cascade>
                          Github
                        </Flip>
                      </Button>
                    </a>
                  </ButtonBar>
                </Content>
              </ModalBody>
            </Modal>
          </Fade>
        </ModalContainer>
      </div>
    );
  }
}

export default MoreInfoModal
