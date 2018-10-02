import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  background: #d9d7d4;
  padding: 15px;
  flex: 1 0 auto;
`;

class Posts extends React.PureComponent {
  render() {
    return (
      <PostContainer>
        <h2>Posts here</h2>
        <h2>Posts here</h2>
        <h2>Posts here</h2>
        <h2>Posts here</h2>
        <h2>Posts here</h2>
      </PostContainer>
    )
  }
}

export default Posts