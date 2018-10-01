import { combineReducers } from 'redux';
import { reducer as site } from '../../scenes/Site/reducer'
import { reducer as account } from '../../scenes/AdminBar/reducer'
import { reducer as header } from '../../scenes/Site/Header/reducer'
import { reducer as body } from '../../scenes/Site/Body/reducer'

const rootReducer = combineReducers({
  site,
  account,
  header,
  body,
});

export { rootReducer };