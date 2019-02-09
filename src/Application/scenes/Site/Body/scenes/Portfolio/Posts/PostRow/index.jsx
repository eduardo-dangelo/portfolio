import React from 'react';
import IconType from '../Post/IconType'
import Flip from 'react-reveal/Flip'
import {
  Row,
  Button,
  PostRowContainer,
  PostRowTitle,
  IconBox,
  ContentBox,
  Title,
  Description,
  ButtonBoxRight,
  TitleContainer,
} from './elements';
import { PostsListContainer } from '../index';
import Fade from 'react-reveal/Fade';
import { FaDesktop, FaGithub } from 'react-icons/fa'

class PostRow extends React.Component {
  render() {
    const { posts } = this.props;
    console.log('this.props', this.props)
    return (
      <div>
        <PostsListContainer>
        <Fade bottom cascade>
          <div>
            {posts.length > 0 && posts.map((post, key) => {
              return (
                <Row key={key}>
                  <PostRowContainer>
                    <PostRowTitle>
                      <IconBox post={post}>
                        <IconType type={post.key}/>
                      </IconBox>
                      <ContentBox>
                        <Title>
                          {post.title}
                        </Title>
                        <Description>
                          {post.description}
                        </Description>
                      </ContentBox>
                    </PostRowTitle>
                    <ButtonBoxRight>
                      <a href={post.github} target="_blank">
                        <Button bg={'#3c3a3b'}>
                          <FaGithub/>
                          <Flip top cascade>
                            Github
                          </Flip>
                        </Button>
                      </a>
                      <a href={post.demo} target="_blank">
                        <Button bg={'#2aa629'} ml>
                          <FaDesktop/>
                          <Flip top cascade>
                            Demo
                          </Flip>
                        </Button>
                      </a>
                    </ButtonBoxRight>
                  </PostRowContainer>
                </Row>
              );
            })}
          </div>
        </Fade>
        </PostsListContainer>
      </div>
    );
  }
}

export default PostRow;
