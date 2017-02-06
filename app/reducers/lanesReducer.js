import uuid from 'uuid';
import {ADD_LANE, ATTACH_TO_LANE} from '../actions/laneActions'

function lanesReducer(state = [], action){
  switch(action.type){
    case ADD_LANE:
      return[
        ...state,
        {
          id: uuid.v4(),
          name: action.text
        }
      ];
      
    default:
      return state;
  }
}

export default lanesReducer;
