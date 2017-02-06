import {ADD_LANE, UPDATE_LANE, DELETE_LANE, ACTIVATE_LANE_EDIT} from './laneActions';

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
export default {
  addLane,
  updateLane,
  deleteLane,
  activateLaneEdit
};
