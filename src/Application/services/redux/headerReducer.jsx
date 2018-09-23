
const SHOW_LINK_INPUT = 'header/SHOW_LINK_INPUT'
const UPDATE_HEADER_PROPS = 'header/UPDATE_HEADER_PROPS'
const UPDATE_SOCIAL_MEDIA_VALUE = 'header/UPDATE_SOCIAL_MEDIA_VALUE'

const initialState = {
  title: {
    bold: true,
    italic: true,
    size: 'medium',
    align: 'center',
    content: 'Hello World'
  },
  box: {
    size: 'medium',
    color: '#323232',
    bgColor: '#d5d1c0',
  },
  social: {
    links: {
      github: '',
      twitter: '',
      codepen: '',
      linkedIn: '',
      facebook: '',
    },
    activeKey: '',
    showInput: false,
  },
  displayName: {
    content: 'Author name'
  },
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LINK_INPUT:
      return {
        ...state,
        social: {
          ...state.social,
          showInput: true,
          activeKey: action.payload
        }
      }
    case UPDATE_HEADER_PROPS:
      return {
        ...state,
        [action.payload.target]: {
          ...state[action.payload.target],
          [action.payload.prop]: action.payload.value
        },
      }
    case UPDATE_SOCIAL_MEDIA_VALUE:
      return {
        ...state,
        social: {
          activeKey: '',
          showInput: false,
          links: {
            ...state.social.links,
            [action.payload.key]: action.payload.value
          }
        }
      }
    default:
      return state
  }
}

const showLinkInput = (key) => ({ type: SHOW_LINK_INPUT, payload: key })
const updateHeaderProps = (target, prop, value) => ({ type: UPDATE_HEADER_PROPS, payload: { target, prop, value, }})
const updateSocialMediaValue = (key, value) => ({ type: UPDATE_SOCIAL_MEDIA_VALUE, payload: { key, value, }})

export const actions = {
  showLinkInput,
  updateHeaderProps,
  updateSocialMediaValue,
}