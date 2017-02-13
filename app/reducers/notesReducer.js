import uuid from 'uuid';
import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ACTIVATE_EDITING, MOVE_NOTE} from '../actions/noteActions';
import update from 'immutability-helper';

function notesReducer(state = [], action){
  switch(action.type){
    case ADD_NOTE:
      return [
        ...state,
      {
        id: uuid.v4(),
        task: action.text,
        isEditing: false,
        laneId: action.laneId
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
        : note);

    case MOVE_NOTE: {
      const currentIndex = state.findIndex((note) => note.id === action.sourceId);
      const note = update(state[currentIndex], {laneId:{$set: action.targetLaneId}});
      const newIndex = action.targetId ?
        state.findIndex((note) => note.id === action.targetId) :
        0;
      return update(state,{
        $splice: [
          [currentIndex, 1],
          [newIndex, 0, note]
        ]
      });
    }

    default:
      return state;
  }
}

export default notesReducer;
