import React from 'react';
import IconType from './IconType';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { OverlayInfo, PostWrapper, Wrapper, ButtonBar, Button, IconContainer } from './elements';

class Post extends React.PureComponent {
  state = {
    showOverlay: false,
    showModal: false
  }

  render() {
    const { post } = this.props;
    const { showOverlay, showModal } = this.state;
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
                <a href={post.github} target="_blank">
                  <Button>
                    <Flip top when={showOverlay} cascade>
                      Github
                    </Flip>
                  </Button>
                </a>
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
}

export default Post;

