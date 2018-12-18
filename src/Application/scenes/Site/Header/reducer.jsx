const UPDATE_HEADER_PROPS = 'header/UPDATE_HEADER_PROPS'

const initialState = {
  title: {
    bold: false,
    italic: false,
    size: 'x-large',
    align: 'center',
    content: 'Web Developer'
  },
  box: {
    size: 'x-large',
    color: '#fafafa',
    bgColor1: '#062123',
    bgColor2: '#051618',
    angle: 315
  },
  social: {
    github: 'http://github.com/eduardo-dangelo',
    twitter: '',
    codepen: 'https://codepen.io/eduardodangelo',
    linkedIn: 'https://www.linkedin.com/in/eduardo-d-angelo-profile/',
    facebook: '',
  },
  name: {
    content: 'Eduardo D\'Angelo'
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