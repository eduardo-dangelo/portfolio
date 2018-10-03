import { combineReducers } from 'redux'
import { reducer as site } from '../../scenes/Site/reducer'
import { reducer as account } from '../../scenes/AdminBar/reducer'
import { reducer as header } from '../../scenes/Site/Header/reducer'
import { reducer as body } from '../../scenes/Site/Body/reducer'
import { reducer as portfolio } from '../../scenes/Site/Body/scenes/Portfolio/reducer'

const rootReducer = combineReducers({
  site,
  account,
  header,
  body,
  portfolio,
});

export { rootReducer };