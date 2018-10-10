import React from 'react'
import styled from 'styled-components'

const PostWrapper = styled.div`
  width: 25%;
  height: 300px;
  border: 1px solid orange;
  background: gray;
  opacity: 1;
`;

const OverlayInfo = styled.div`
  padding: 15px;
  background: rgba(0,0,0,0.6);
  color: white;
  height: 100%;
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
        {showOverlay && (
          <OverlayInfo >
            <h3>Title</h3>
            <p>description</p>
          </OverlayInfo>
        )}
      </PostWrapper>
    )
  }
}

export default Post