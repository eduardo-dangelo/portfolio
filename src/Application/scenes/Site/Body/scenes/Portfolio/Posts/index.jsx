import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import Post from './Post'

const PostsContainer = withReveal(styled.div`
  background: #d9d7d4;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
`, <Fade cascade/>);


const posts = [
  {
    title: 'Weather App',
    key: 'weather_app',
    bg: '#0e9a88',
    description: 'Serach for multiple cities and receive weather information.(source: openweathermap.org)',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/react-redux-weather-app/',
    github: 'https://github.com/eduardo-dangelo/react-redux-weather-app'
  },
  {
    title: 'Redux Playground',
    key: 'redux_playground',
    bg: '#9a5a18',
    description: 'Examples of redux and redux-form usage',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/redux-playground/',
    github: 'https://github.com/eduardo-dangelo/redux-playground'
  },
  {
    title: 'Styling Via Props',
    key: 'styling_via_props',
    bg: '#4b129a',
    description: 'change the style of component with redux and styled-components',
    technologies: ['react', 'redux', 'scss', 'bootstrap'],
    demo: 'https://eduardo-dangelo.github.io/styling-components-via-props/',
    github: 'https://github.com/eduardo-dangelo/styling-components-via-props'
  },
  {
    title: 'Youtube Api Search',
    key: 'youtube_api_serach',
    bg: '#9a1e10',
    description: 'An application that\'s search and play youtube videos',
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
    demo: 'https://eduardo-dangelo.github.io/youtube-api-search-app/',
    github: 'https://github.com/eduardo-dangelo/youtube-api-search-app'
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