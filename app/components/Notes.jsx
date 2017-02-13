import React from 'react';
import uuid from 'uuid';
import Note from './Note';
import Editable from './Editable';
import noteActionCreators from '../actions/noteActionCreators';
import {connect} from 'react-redux';

const Notes = ({notes, onNoteClick, onEdit, onDelete, onMove, dispatch}) =>
  (<ul className="notes">{notes.map(({id, laneId, isEditing, task}) =>
        <li key={id}>
          <Note
            className="note"
            id={id}
            laneId={laneId}
            onClick={onNoteClick.bind(null, id)}
            onMove={onMove}
            >
            <Editable
                className="editable"
                editing = {isEditing}
                value = {task}
                onEdit = {onEdit.bind(null, id)}/>
            <button
              className="delete"
              onClick={onDelete.bind(null, id)}>x</button>
          </Note>
        </li>
  )}</ul>
);

export default connect()(Notes);
