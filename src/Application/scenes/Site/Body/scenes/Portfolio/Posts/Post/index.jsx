import React from 'react'
import IconType from './IconType'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import MoreInfoModal from '../MoreInfoModal/index'
import styled, { keyframes } from 'styled-components'


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
  
  h2 {
    font-weight: 400;
  }
`;

export const ButtonBar = styled.div`
   a, a:active {
    color: white;
   }
`;

export const Button = styled.button`
  background: none;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 15px;
  transition: .3s ease;
  border: 1px solid white;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.7);
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const IconContainer = styled.div`
  top: 0;
  right: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  color: white;
  padding: 30px;
  display: flex;
  opacity: 0.1;
  font-size: 6.5em;
  position: absolute;
  align-items: center;
  transition: .6s ease;
  justify-content: space-around;
  
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
    display: flex;
    position: relative;
    border-radius: 50%;
    align-items: center;
    transition: .6s ease;
    justify-content: space-around;
    
    img {
      width: 90%;
      position: relative;
      animation: ${FadeIn} 1.2s ease-out;
    }
  }
`;

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
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
        <Wrapper>
          <Fade when={showOverlay}>
            <OverlayInfo>
              <h2>{post.title}</h2>
              <p>
                {post.description}
              </p>
              <ButtonBar>
                <Button onClick={this.handleToggleModal}>
                  <Flip top when={showOverlay} cascade>
                    + Info
                  </Flip>
                </Button>
                <a href={post.demo} target="_blank">
                  <Button>
                    <Flip top when={showOverlay} cascade>
                      Demo
                    </Flip>
                  </Button>
                </a>
              </ButtonBar>
            </OverlayInfo>
          </Fade>
        </Wrapper>
        {showModal && (
          <MoreInfoModal post={post} onClose={this.handleToggleModal}/>
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
