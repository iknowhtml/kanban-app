import * as tasks from './laneActions';

function addLane(text = 'new lane'){
  return{
    type: tasks.ADD_LANE,
    text
  }
}

function updateLane(id, text){
  return{
    type: tasks.UPDATE_LANE,
    id,
    text
  }
}

function deleteLane(id){
  return{
    type: tasks.DELETE_LANE,
    id
  }
}

function activateLaneEdit(id){
  return{
    type: tasks.ACTIVATE_LANE_EDIT,
    id
  }
}

export default {
  addLane,
  updateLane,
  deleteLane,
  activateLaneEdit
};
