import * as types from './actions';

function addNote(text = 'New Item'){
  return{
    type: types.ADD_NOTE,
    text
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


export default {
  addNote,
  updateNote,
  deleteNote,
  activateEditing
}
