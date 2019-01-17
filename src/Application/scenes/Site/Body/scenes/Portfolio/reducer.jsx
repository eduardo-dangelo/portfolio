
const UPDATE_ABOUT_PROPS = 'portfolio/about/UPDATE_ABOUT_PROPS'
const UPDATE_LINKS = 'portfolio/about/UPDATE_LINKS'
const ADD_LINK = 'portfolio/about/ADD_LINK'
const SELECT_DISPLAY_MODE = 'body/SELECT_DISPLAY_MODE';

const initialValues = {
  posts: [
    {
      title: 'Social Media Demo',
      key: 'social_media_demo',
      bg: '#c50039',
      description: 'An example of a social media application.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/social-media-demo',
      github: 'https://github.com/eduardo-dangelo/social-media-demo'
    },
    {
      title: 'Weather App',
      key: 'weather_app',
      bg: '#fbaa39',
      description: 'Search for multiple cities and receive weather information.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/react-redux-weather-app/',
      github: 'https://github.com/eduardo-dangelo/react-redux-weather-app'
    },
    {
      title: 'Redux Playground',
      key: 'redux_playground',
      bg: '#571845',
      description: 'Examples of usages of ReactJs + Redux and Redux-form.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/redux-playground/',
      github: 'https://github.com/eduardo-dangelo/redux-playground'
    },
    {
      title: 'Styling Via Props',
      key: 'styling_via_props',
      bg: '#2561e9',
      description: 'Controlling component style with Redux and Styled-components.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/styling-components-via-props/',
      github: 'https://github.com/eduardo-dangelo/styling-components-via-props'
    },
    {
      title: 'Youtube Api Search',
      key: 'youtube_api_serach',
      bg: '#992322',
      description: 'An interface to search and play youtube videos.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/youtube-api-search-app/',
      github: 'https://github.com/eduardo-dangelo/youtube-api-search-app'
    },
    {
      title: 'Fight Game Menu',
      key: 'fight_game_menu',
      bg: '#412781',
      description: 'Select your players and start your fight.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/redux-simple-example/',
      github: 'https://github.com/eduardo-dangelo/redux-simple-example'
    },
  ],
  displayMode: 'block',
  about: {
    profile: {
      content: 'I am a highly talented and ambitious full-stack developer, with a strong background in front-end & graphic design and a proven record of delivering creative and innovative solutions. My key skills are communication skills, excellent IT skills, professional approach to time, costs, deadlines and an understanding of latest trends and their role within a commercial environment. Always looking for projects where I can use my skills, be challenged and grow professionally.',
      display: true
    },
    skills: {
      content: '**Business awareness:** After several years of working within different organisations and industries I have gained a high level of understanding of business processes and constraints.\n\n **Communication skills:** I have developed excellent communication skills, both verbally and written. Including the ability to convey information to non-technical colleagues in a concise and clear way.\n\n **Attention to detail:** I have developed to achieve thoroughness and accuracy when accomplishing a task, this I have especially developed with my paintings.   ',
      display: true
    },
    contact: {
      content: 'your contact message here',
      email: 'your email here',
      display: true
    },
    links: [
      {
        label: 'some extra link that you wanna put',
        href: ''
      },
      {
        label: 'xtra link that you wanna put',
        href: 'asdasda'
      }
    ]
  }
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case UPDATE_ABOUT_PROPS:
      return {
        ...state,
        about: {
          ...state.about,
          [action.payload.target]: {
            ...state.about[action.payload.target],
            [action.payload.prop]: action.payload.value
          }
        }
      }
    case UPDATE_LINKS:
      return {
        ...state,
        about: {
          ...state.about,
          links: action.payload
        }
      }
    case ADD_LINK:
      return {
        ...state,
        about: {
          ...state.about,
          links: [
            ...state.about.links,
            {
              label: '',
              href: ''
            }
          ]
        }
      }
    case SELECT_DISPLAY_MODE:
      return {
        ...state,
        displayMode: action.payload
      }
    default:
      return state
  }
}

const updateAboutProps = (target, prop, value) => (dispatch) => {
  dispatch({ type: UPDATE_ABOUT_PROPS, payload: { target, prop, value }})
}

const updateLinks = (value) => (dispatch) => {
  dispatch({ type: UPDATE_LINKS, payload: value })
}

const addLink = () => (dispatch) => {
  dispatch({ type: ADD_LINK })
}

const removeLlink = (linkIndex) => (dispatch, getState) => {
  const links = getState().portfolio.about.links
  links.splice(linkIndex, 1)
}

const selectDisplayMode = (payload) => ({ type: SELECT_DISPLAY_MODE, payload})

export const actions = {
  updateAboutProps,
  updateLinks,
  addLink,
  removeLlink,
  selectDisplayMode,
}

