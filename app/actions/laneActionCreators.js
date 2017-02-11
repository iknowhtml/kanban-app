import {ADD_LANE, UPDATE_LANE, DELETE_LANE, ACTIVATE_LANE_EDIT, MOVE_NOTE} from './laneActions';

function addLane(text = 'new lane'){
  return{
    type: ADD_LANE,
    text
  }
}

function updateLane(id, text){
  return{
    type: UPDATE_LANE,
    id,
    text
  }
}

function deleteLane(id){
  return{
    type: DELETE_LANE,
    id
  }
}

function activateLaneEdit(id){
  return{
    type: ACTIVATE_LANE_EDIT,
    id
  }
}

function moveNote(sourceId, targetId){
  return{
    type: MOVE_NOTE,
    sourceId,
    targetId
  }
}

export default {
  addLane,
  updateLane,
  deleteLane,
  activateLaneEdit,
  moveNote
};
