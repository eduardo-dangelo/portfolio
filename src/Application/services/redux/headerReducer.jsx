const UPDATE_HEADER_PROPS = 'header/UPDATE_HEADER_PROPS'

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
    github: 'http://github.com',
    twitter: '',
    codepen: 'http://codepen.com',
    linkedIn: '',
    facebook: '',
  },
  displayName: {
    content: 'Author name'
  },
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HEADER_PROPS:
      return {
        ...state,
        [action.payload.target]: {
          ...state[action.payload.target],
          [action.payload.prop]: action.payload.value
        },
      }
    default:
      return state
  }
}

const updateHeaderProps = (target, prop, value) => ({ type: UPDATE_HEADER_PROPS, payload: { target, prop, value, }})

export const actions = {
  updateHeaderProps,
}