
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
    github: '',
    twitter: '',
    codepen: '',
    linkedIn: '',
    facebook: '',
    instagram: '',
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}