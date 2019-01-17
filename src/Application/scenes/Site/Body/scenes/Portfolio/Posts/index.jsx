import React from 'react';
import PostBlock from './Post';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import { connect } from 'react-redux'
import PostRow from './PostRow'

export const PostsContainer = withReveal(styled.div`
  padding: 0;
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  background: #d9d7d4;
  //border: 10px solid red;
  justify-content: space-around;
`, <Fade/>);

export const PostsListContainer = styled(PostsContainer)`
  padding: 30px 0 !important;
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ row }) => row ? `row` : `column`};
`;

class Posts extends React.PureComponent {
  render() {
    const { portfolio } = this.props;
    const posts = portfolio.posts;
    const displayMode = portfolio.displayMode;

    if (displayMode === 'list') {
      return (
        <PostRow posts={posts}/>
      );
    }

    return (
      <PostBlock posts={posts} displayMode={displayMode}/>
    )
  }
}

export default connect(
  (state) => ({
    portfolio: state.portfolio
  })
)(Posts);

