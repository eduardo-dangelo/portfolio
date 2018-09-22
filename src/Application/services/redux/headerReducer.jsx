
const SHOW_LINK_INPUT = 'header/SHOW_LINK_INPUT'
const UPDATE_SOCIAL_MEDIA_VALUE = 'header/UPDATE_SOCIAL_MEDIA_VALUE'

const initialState = {
  title: {
    bold: false,
    italic: false,
    size: 'medium',
    align: 'center',
    color: '#ffffff',
    content: 'Hello World'
  },
  displayName: 'Author name',
  box: {
    size: 'medium',
    bgColor: '#999170',
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
  }
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
const updateSocialMediaValue = (key, value) => ({ type: UPDATE_SOCIAL_MEDIA_VALUE, payload: { key, value, }})

export const actions = {
  showLinkInput,
  updateSocialMediaValue,
}