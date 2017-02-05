import uuid from 'uuid';
import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, IS_EDITING_NOTE} from './actions';
import {combineReducers} from 'redux';

var initial =[
  {
		id: uuid.v4(),
		task: 'Learn React',
    isEditing: false
	},
  {
		id: uuid.v4(),
		task: 'Do laundry',
    isEditing: false
	}
];

function notesReducer(state = initial, action){
  switch(action.type){
    case ADD_NOTE:
      return [
        ...state,
      {
        id: uuid.v4(),
        text: action.text,
        isEditing: false
      }];

    case UPDATE_NOTE:
      return state.map(note =>
        note.id === action.id ?
        Object.assign({}, note, {text: action.text})
        : note);

    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);

    case IS_EDITING_NOTE:
      return state.map(note =>
        note.id === action.id ?
        Object.assign({}, note, {isEditing: action.isEditing})
        : note)

    default:
      return state;
  }
}

const reducer = combineReducers({
  notesReducer
});

export default reducer;
