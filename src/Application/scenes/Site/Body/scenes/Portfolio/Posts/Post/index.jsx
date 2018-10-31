import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
// import img from './temp_img.jpg';
import img from '../img/weather_icon.png'
import MoreInfoModal from '../MoreInfoModal/index'


const PostWrapper = styled.div`
  opacity: 1;
  height: 350px;
  width: 33.33%;
  overflow: hidden;
  position: relative;
  background: ${({ bg }) => bg};
  box-shadow: inset 0 0 49px rgba(0,0,0,0.3);
  
  @media all and (max-width: 1230px) {
    width: 50%;
  }
  
    @media all and (max-width: 860px) {
    width: 100%;
  }
  
  img {
    top: 0;
    z-index: 0;
    position: absolute;
  }
`;

const OverlayInfo = styled.div`
  z-index: 3;
  color: white;
  height: 350px;
  padding: 30px;
  display: flex;
  position: relative;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0,0,0,0.8);
`;

const ButtonBar = styled.div`
  
`;

const Button = styled.button`
  background: none;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 15px;
  border: 1px solid white;
`;

class Post extends React.PureComponent {
  state = {
    showOverlay: false,
    showModal: false
  }

  handleShow = () => {
    this.setState({
      showOverlay: true
    })
  }

  handleHide = () => {
    this.setState({
      showOverlay: false
    })
  }

  handleToggleModal = () => {
    console.log('called')
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    const { post } = this.props
    const { showOverlay, showModal } = this.state
    return (
      <PostWrapper bg={post.bg} onMouseOver={this.handleShow} onMouseLeave={this.handleHide}>
        <Fade when={showOverlay}>
          <OverlayInfo>
            <h2>{post.title}</h2>
            <p>
              {post.description}
            </p>
            <ButtonBar>
              <Button onClick={this.handleToggleModal}>
                + Info
              </Button>
              <a href={post.demo} target="_blank">
                <Button>
                  Demo
                </Button>
              </a>
            </ButtonBar>
          </OverlayInfo>
        </Fade>
        {showModal && (
          <MoreInfoModal onClose={this.handleToggleModal}/>
        )}
        {/*<img src={require('./temp_img.jpg')} alt="test"/>*/}
      </PostWrapper>
    )
  }
}

export default Post