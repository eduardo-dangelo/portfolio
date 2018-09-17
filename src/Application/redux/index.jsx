import { combineReducers } from 'redux';
import { reducer as account } from './userAccountReducer'

const rootReducer = combineReducers({
  account
});

export { rootReducer };