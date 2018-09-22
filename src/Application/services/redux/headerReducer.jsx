
const SHOW_LINK_INPUT = 'header/SHOW_LINK_INPUT'
const UPDATE_PAGE_TITLE = 'header/UPDATE_PAGE_TITLE'
const UPDATE_DISPLAY_NAME = 'header/UPDATE_DISPLAY_NAME'
const UPDATE_SOCIAL_MEDIA_VALUE = 'header/UPDATE_SOCIAL_MEDIA_VALUE'

const initialState = {
  title: {
    props: {
      bold: true,
      italic: true,
      size: 'medium',
      align: 'center',
    },
    content: 'Hello World'
  },
  box: {
    size: 'medium',
    color: '#ffffff',
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
  },
  displayName: 'Author name',
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
    case UPDATE_PAGE_TITLE:
      return {
        ...state,
        title: {
          ...state.title,
          content: action.payload
        },
      }
    case UPDATE_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.payload
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
const updatePageTitle = (value) => ({ type: UPDATE_PAGE_TITLE, payload: value })
const updateDisplayName = (value) => ({ type: UPDATE_DISPLAY_NAME, payload: value })
const updateSocialMediaValue = (key, value) => ({ type: UPDATE_SOCIAL_MEDIA_VALUE, payload: { key, value, }})

export const actions = {
  showLinkInput,
  updatePageTitle,
  updateDisplayName,
  updateSocialMediaValue,
}