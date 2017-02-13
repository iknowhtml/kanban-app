import React from 'react';
import noteActionCreators from '../actions/noteActionCreators';
import laneActionCreators from '../actions/laneActionCreators';
import Notes from './Notes';
import Editable from './Editable'
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import {compose} from 'redux';

const Lane = ({connectDropTarget, lane, notes, onMove, dispatch}) =>
connectDropTarget(<div className='lane'>
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
      onDelete={id => dispatch(noteActionCreators.deleteNote(id))}
      onMove = {onMove}
      />

  </div>);

  const noteTarget = {
      hover(targetProps, monitor){
        const sourceProps = monitor.getItem();
        const sourceId = sourceProps.id;
        const targetLaneId = targetProps.lane.id;
        if(targetProps.notes.filter(note => note.laneId == targetLaneId).length === 0){
          targetProps.onMove(sourceId, targetLaneId);
        }
      }
  }


  export default compose(
    DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
      connectDropTarget: connect.dropTarget()
    })),
    connect())(Lane);
