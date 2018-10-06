
const UPDATE_ABOUT_PROPS = 'portfolio/about/UPDATE_ABOUT_PROPS'

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
    default:
      return state
  }
}

const updateAboutProps = (target, prop, value) => (dispatch) => {
  console.log('target', target);
  console.log('value', value);
  dispatch({ type: UPDATE_ABOUT_PROPS, payload: { target, prop, value }})
}

export const actions = {
  updateAboutProps,
}

