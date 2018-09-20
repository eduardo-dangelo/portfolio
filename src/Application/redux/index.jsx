import { combineReducers } from 'redux';
import { reducer as account } from './userAccountReducer'
import { reducer as header } from './headerReducer'

const rootReducer = combineReducers({
  account,
  header,
});

export { rootReducer };