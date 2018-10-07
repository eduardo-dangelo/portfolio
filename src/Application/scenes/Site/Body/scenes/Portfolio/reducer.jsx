
const UPDATE_ABOUT_PROPS = 'portfolio/about/UPDATE_ABOUT_PROPS'
const UPDATE_LINKS = 'portfolio/about/UPDATE_LINKS'
const ADD_LINK = 'portfolio/about/ADD_LINK'

const initialValues = {
  posts: [],
  about: {
    profile: {
      content: 'Your profile text here',
      display: true
    },
    skills: {
      content: 'Your skills list here',
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

export const actions = {
  updateAboutProps,
  updateLinks,
  addLink,
  removeLlink,
}

