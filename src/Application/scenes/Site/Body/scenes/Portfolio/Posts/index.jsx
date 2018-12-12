import React from 'react'
import Post from './Post'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import withReveal from 'react-reveal/withReveal'

const PostsContainer = withReveal(styled.div`
  padding: 0;
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  background: #d9d7d4;
`, <Fade cascade/>);


const posts = [
  {
    title: 'Social Media Demo',
    key: 'social_media_demo',
    bg: '#4b0a07',
    description: 'An example of a social-media type of application',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/social-media-demo',
    github: 'https://github.com/eduardo-dangelo/social-media-demo'
  },
  {
    title: 'Weather App',
    key: 'weather_app',
    bg: '#0e9a88',
    description: 'Search for multiple cities and receive weather information',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/react-redux-weather-app/',
    github: 'https://github.com/eduardo-dangelo/react-redux-weather-app'
  },
  {
    title: 'Redux Playground',
    key: 'redux_playground',
    bg: '#9a5a18',
    description: 'Examples of React-redux and Redux-form usage',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/redux-playground/',
    github: 'https://github.com/eduardo-dangelo/redux-playground'
  },
  {
    title: 'Styling Via Props',
    key: 'styling_via_props',
    bg: '#4b129a',
    description: 'Style your component with Redux and Styled-components',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/styling-components-via-props/',
    github: 'https://github.com/eduardo-dangelo/styling-components-via-props'
  },
  {
    title: 'Youtube Api Search',
    key: 'youtube_api_serach',
    bg: '#9a1e10',
    description: 'An interface to search and play youtube videos',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/youtube-api-search-app/',
    github: 'https://github.com/eduardo-dangelo/youtube-api-search-app'
  },
  {
    title: 'Fight Game Menu',
    key: 'fight_game_menu',
    bg: '#2967ac',
    description: 'Select your players and start your fight',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/redux-simple-example/',
    github: 'https://github.com/eduardo-dangelo/redux-simple-example'
  },
]

class Posts extends React.PureComponent {
  render() {
    return (
      <PostsContainer>
        {posts.map((post) => {
          return (
            <Post post={post} key={post.key}/>
          );
        })}
      </PostsContainer>
    )
  }
}

export default Posts
