import React from 'react';
import noteActionCreators from '../actions/noteActionCreators';
import Notes from './Notes';
import {connect} from 'react-redux';

const Lane = ({lane, dispatch, notes}) =>
(<div>
    <div className='lane-header'>
      <button className="add-note" onClick={() => dispatch(noteActionCreators.addNote(lane.id))}>+</button>
      <div className="lane-name">{lane.name}</div>
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
