import React from 'react';
import Lane from './Lane';
import {connect} from 'react-redux';
import noteActionCreators from '../actions/noteActionCreators';

const Lanes = ({lanes, notes, dispatch}) => (
  <div className='lanes'>
    {lanes.map(lane =>
      <Lane
        key= {lane.id}
        lane = {lane}
        notes = {notes}
        onMove = {(sourceId, laneTargetId, targetId) => dispatch(noteActionCreators.moveNote(sourceId, laneTargetId, targetId))}
      />
    )}
  </div>
);

function mapStateToProps(state){
  return {
    notes: state.notesReducer
  }
}

export default connect(mapStateToProps)(Lanes);
