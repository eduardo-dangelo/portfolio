import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
// import img from './temp_img.jpg';
import img from './IconType/img/weather_icon.png'
import MoreInfoModal from '../MoreInfoModal/index'
import { FaYoutube } from 'react-icons/fa'
import IconType from './IconType'


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
  background: rgba(0,0,0,0.1);
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

const IconContainer = styled.div`
  z-index: 0;
  color: white;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  padding: 30px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  font-size: 6.5em;
  opacity: 0.1;
  transition: .6s ease;
  
  &:hover {
    font-size: 4em;
    
    > div {
      width: 135px;
      height: 135px;
    }
  }
  
  > div {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: .6s ease;
    
    img {
      position: relative;
      width: 90%;
    }
  }
`;

class Post extends React.PureComponent {
  state = {
    showOverlay: false,
    showModal: false
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
        <IconContainer>
          <IconType type={post.key}/>
        </IconContainer>
      </PostWrapper>
    )
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
}

export default Post