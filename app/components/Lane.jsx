import React from 'react';
import noteActionCreators from '../actions/noteActionCreators';
import laneActionCreators from '../actions/laneActionCreators';
import Notes from './Notes';
import Editable from './Editable'
import {connect} from 'react-redux';

const Lane = ({lane, dispatch, notes}) =>
(<div className='lane'>
    <div className='lane-header' onClick={() => dispatch(laneActionCreators.activateLaneEdit(lane.id))}>
      <button className='note-add' onClick={(e) =>{
          e.stopPropagation();
          dispatch(noteActionCreators.addNote(lane.id));
        }}>+</button>
      <Editable
        className='lane-name'
        editing={lane.isEditing}
        value={lane.name}
        onEdit={((id, name) => dispatch(laneActionCreators.updateLane(id, name))).bind(null, lane.id)}
      />
    <button className='lane-delete' onClick={() => {
          notes.forEach(note =>{
            if(note.laneId == lane.id){
              dispatch(noteActionCreators.deleteNote(note.id));
            }
          });
          dispatch(laneActionCreators.deleteLane(lane.id));
        }}>x</button>
  </div>
    <Notes notes={notes.filter((note) => note.laneId === lane.id)}
      onNoteClick={(id) => dispatch(noteActionCreators.activateEditing(id))}
      onEdit={(id, task) => dispatch(noteActionCreators.updateNote(id, task))}
      onDelete={id => dispatch(noteActionCreators.deleteNote(id))}/>
  </div>);

function mapStateToProps(state){
  return {
    notes: state.notesReducer
  }
}

export default connect(mapStateToProps)(Lane);
