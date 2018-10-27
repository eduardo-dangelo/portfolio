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
            <h1>Social Media App</h1>
          </Modal>
          <DarkScreen onClick={this.handleOnClose}/>
        </ModalContainer>
      </div>
    );
  }
}

export default MoreInfoModal;