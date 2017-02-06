import {ADD_LANE, ATTACH_TO_LANE} from './laneActions';

function addLane(text = 'new lane'){
  return{
    type: ADD_LANE,
    text
  }
}

export default {
  addLane
};
