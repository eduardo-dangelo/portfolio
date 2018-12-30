
const SELECT_BODY_TYPE = 'body/SELECT_BODY_TYPE';

const initialValues = {
  bodyType: 'portfolio'
}

export function reducer(state = initialValues, action) {
  switch(action.type) {
    case SELECT_BODY_TYPE:
      return {
        bodyType: action.payload
      }
    default:
      return state
  }
}

const selectBodyType = (payload) => ({ type: SELECT_BODY_TYPE, payload})

export const actions = {
  selectBodyType,
};
