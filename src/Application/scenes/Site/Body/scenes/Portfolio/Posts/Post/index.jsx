import React from 'react';
import IconType from './IconType';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import {
  OverlayInfo,
  PostWrapper,
  Wrapper,
  ButtonBar,
  Button,
  ButtonBarContainer,
  IconContainer,
} from './elements';
import { PostsContainer } from '../index'
import { FaDesktop, FaGithub } from 'react-icons/fa'

class PostBlock extends React.PureComponent {
  state = {
    showOverlay: null,
    showModal: false
  }

  render() {
    const { posts, displayMode } = this.props;
    const { showOverlay, showModal } = this.state;
    return (
      <PostsContainer>
        {posts.length > 0 && posts.map((post, key) => {
          return (
            <PostWrapper
              key={key}
              bg={post.bg}
              displayMode={displayMode}
              onMouseOver={this.handleShow(key)}
              onMouseLeave={this.handleHide}
            >
              <Wrapper>
                <Fade when={showOverlay === key}>
                  <OverlayInfo displayMode={displayMode}>
                    <h2>
                      <Flip top  cascade when={showOverlay === key}>
                        {post.title}
                      </Flip>
                    </h2>
                    <p>
                      <Flip top  cascade when={showOverlay === key}>
                        {post.description}
                      </Flip>
                    </p>
                    <ButtonBarContainer>
                      <ButtonBar>
                        <a href={post.github} target="_blank">
                          <Button>
                            <FaGithub/>
                            <Flip top  cascade when={showOverlay === key}>
                              Github
                            </Flip>
                          </Button>
                        </a>
                        <a href={post.demo} target="_blank">
                          <Button>
                            <FaDesktop/>
                            <Flip top  cascade when={showOverlay === key}>
                              Demo
                            </Flip>
                          </Button>
                        </a>
                      </ButtonBar>
                    </ButtonBarContainer>
                  </OverlayInfo>
                </Fade>
              </Wrapper>
              <IconContainer>
                <IconType type={post.key}/>
              </IconContainer>
            </PostWrapper>
          );
        })}
      </PostsContainer>
    )
  }

  handleShow = (key) => () => {
    this.setState({
      showOverlay: key
    })
  }

  handleHide = () => {
    this.setState({
      showOverlay: false
    })
  }
}

export default PostBlock;

