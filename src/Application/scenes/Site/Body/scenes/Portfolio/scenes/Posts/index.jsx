import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import Post from './components/Post'

const PostsContainer = withReveal(styled.div`
  background: #d9d7d4;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
`, <Fade cascade/>);

class Posts extends React.PureComponent {
  render() {
    return (
      <PostsContainer>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </PostsContainer>
    )
  }
}

export default Posts