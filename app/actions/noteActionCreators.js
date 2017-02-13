import * as types from './noteActions';

function addNote(laneId, text = 'New Item'){
  return{
    type: types.ADD_NOTE,
    text,
    laneId
  }
}

function updateNote(id, text){
  return{
    type: types.UPDATE_NOTE,
    id,
    text
  }
}

function deleteNote(id){
  return {
    type: types.DELETE_NOTE,
    id
  }
}

function activateEditing(id) {
  return {
    type: types.ACTIVATE_EDITING,
    id
  }
}

function moveNote(sourceId, targetLaneId, targetId) {
  return{
    type: types.MOVE_NOTE,
    sourceId,
    targetId,
    targetLaneId
  }
}

export default {
  addNote,
  updateNote,
  deleteNote,
  activateEditing,
  moveNote
};
