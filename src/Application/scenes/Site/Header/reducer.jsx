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
    bgColor1: '#d5d1c0',
    bgColor2: '#69665a',
    angle: 90
  },
  social: {
    github: 'http://github.com',
    twitter: '',
    codepen: 'http://codepen.com',
    linkedIn: '',
    facebook: '',
  },
  name: {
    content: 'Author name'
  },
  display: {
    name: true,
    title: true,
    social: true,
  }
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