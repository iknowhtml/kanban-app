import uuid from 'uuid';
import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ACTIVATE_EDITING} from './actions';
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
        task: action.text,
        isEditing: false
      }];

    case UPDATE_NOTE:
      return state.map(note =>
        note.id === action.id ?
        Object.assign({}, note, {task: action.text, isEditing:false})
        : note);

    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);

    case ACTIVATE_EDITING:
      return state.map(note =>
        note.id === action.id ?
        Object.assign({}, note, {isEditing: true})
        : note)

    default:
      return state;
  }
}

const reducer = combineReducers({
  notesReducer
});

export default reducer;
