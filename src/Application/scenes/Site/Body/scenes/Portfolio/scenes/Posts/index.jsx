import React from 'react'
import styled from 'styled-components'

const PostsContainer = styled.div`
  background: #d9d7d4;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
`;

const PostItem = styled.div`
  width: 25%;
  height: 300px;
  border: 1px solid orange;
  background: gray;
  opacity: 1;
  
  &:hover {
    opacity: .6;
  }
`;

class Posts extends React.PureComponent {
  render() {
    return (
      <PostsContainer>
        <PostItem>
          some title
        </PostItem>
        <PostItem>
          some title
        </PostItem>
        <PostItem>
          some title
        </PostItem>
        <PostItem>
          some title
        </PostItem>
        <PostItem>
          some title
        </PostItem>
        <PostItem>
          some title
        </PostItem>
        <PostItem>
          some title
        </PostItem>
      </PostsContainer>
    )
  }
}

export default Posts