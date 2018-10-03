
const initialValues = {
  posts: [],
  about: {
    profile: 'Your profile text here',
    skills: 'Your skills list here',
    contact: {
      text: 'your contact message here',
      email: 'your email here'
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
    default:
      return state
  }
}

