import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import img from './temp_img.jpg';

const PostWrapper = styled.div`
  width: 25%;
  height: 300px;
  border: 1px solid orange;
  opacity: 1;
  position: relative;
  background: url(${img}); 
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    z-index: 0;
  }
`;

const OverlayInfo = styled.div`
  padding: 15px;
  background: rgba(0,0,0,0.8);
  color: white;
  height: 300px;
  position: relative;
  z-index: 3;
`;

class Post extends React.PureComponent {
  state = {
    showOverlay: false
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

  render() {
    const { showOverlay } = this.state
    return (
      <PostWrapper onMouseOver={this.handleShow} onMouseLeave={this.handleHide}>
        <Fade when={showOverlay}>
          <OverlayInfo>
            <h3>Title</h3>
            <p>description</p>
          </OverlayInfo>
        </Fade>
        {/*<img src={require('./temp_img.jpg')} alt="test"/>*/}
      </PostWrapper>
    )
  }
}

export default Post