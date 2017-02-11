import uuid from 'uuid';
import {ADD_LANE, UPDATE_LANE, DELETE_LANE, ACTIVATE_LANE_EDIT} from '../actions/laneActions'

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

    case UPDATE_LANE:
      return state.map(lane =>
        lane.id === action.id ?
        Object.assign({}, lane, {name: action.text, isEditing: false})
        : lane
      );

    case DELETE_LANE:
      return state.filter(lane => lane.id !== action.id);

    case ACTIVATE_LANE_EDIT:
      return state.map(lane =>
        lane.id === action.id ?
        Object.assign({}, lane, {isEditing: true})
        : lane
      );

    default:
      return state;
  }
}

export default lanesReducer;
