import { combineReducers } from 'redux';
import { reducer as account } from '../../scenes/AdminBar/reducer'
import { reducer as header } from '../../scenes/Site/Header/reducer'

const rootReducer = combineReducers({
  account,
  header,
});

export { rootReducer };