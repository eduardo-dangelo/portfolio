
const CREATE_NEW_PAGE = 'site/CREATE_NEW_PAGE'
const LOAD_PAGE = 'site/LOAD_PAGE'
const EDIT_PAGE = 'site/EDIT_PAGE'

const initialValues = {
  pages: [
    {
      pageType: 'documentation',
        url: '/test-page',
        header: {},
      body: [
        {
          title: '',
          content: [
            {
              type: 'text',
              content: ''
            },
            {
              type: 'code',
              content: ''
            },
            {
              type: 'quote',
              content: ''
            }
          ]
        }
      ],
      sidebar: [
        {
          name: '',
        }
      ],
      footer: {
        links: [],
          content: ''
      }
    }
  ],
  activePage: {
    pageType: 'portfolio',
    url: '/test-page',
    header: {},
    body: {
      posts: [],
      about: {
        profile: '',
        skills: '',
        links: [
          {
            label: '',
            href: ''
          }
        ]
      }
    },
    footer: {
      links: [],
      content: ''
    }
  }
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    default:
      return state
  }
}

const createNewPage = () => ({ type: CREATE_NEW_PAGE })
const loadPage = (payload) => ({ type: LOAD_PAGE, payload })
const editPage = (payload) => ({ type: EDIT_PAGE, payload })

export const actions = {
  createNewPage,
  loadPage,
  editPage,
}
