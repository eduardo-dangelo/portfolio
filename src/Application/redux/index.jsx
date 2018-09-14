import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


const rootEpic = combineEpics(

);

const rootReducer = combineReducers({

});

export { rootReducer, rootEpic };