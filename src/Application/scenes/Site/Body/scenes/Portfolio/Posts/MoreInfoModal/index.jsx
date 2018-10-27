import React from 'react';
import styled from 'styled-components';

const DarkScreen = styled.div`
  top: 0;
  left: 0;
  z-index: 5;
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
  padding: 30px;
  background: white;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.7);
`;

const ModalHeader = styled.div`
  border-bottom: 1px dashed black;
  padding-bottom: 15px;
  
  h1 {
    margin: 0;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  padding: 0;
`;

const ImgsContainer = styled.div`
  background: lightgrey;
  min-width: 700px;
  width: 100%;
  height: 400px;
  margin: 15px 0;
`;

const Content = styled.div`
  
`;

class MoreInfoModal extends React.PureComponent {
  handleOnClose = () => {
    console.log('calle too')
    this.props.onClose()
  }

  render() {
    return (
      <div>
        <ModalContainer>
          <Modal>
            <ModalHeader>
              <h1>Social Media App</h1>
            </ModalHeader>
            <ModalBody>
              <ImgsContainer/>
              <Content>
                <p>
                  A clone of a shocial media app just to show how badass Im bich! and more, I dont super
                  gia a shit about this shit!
                </p>
              </Content>
            </ModalBody>
          </Modal>
          <DarkScreen onClick={this.handleOnClose}/>
        </ModalContainer>
      </div>
    );
  }
}

export default MoreInfoModal;