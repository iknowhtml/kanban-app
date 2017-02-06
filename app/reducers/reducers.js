import {combineReducers} from 'redux';
import notesReducer from './notesReducer';
import lanesReducer from './lanesReducer';

const reducers = combineReducers({
  notesReducer,
  lanesReducer
});

export default reducers;
