import React from 'react';
import uuid from 'uuid';
import Note from './Note'
import Editable from './Editable'

const Notes = ({notes, onNoteClick, onEdit, onDelete}) => (
  <ul className="notes">{notes.map( ({id, isEditing, task}) =>
        <li key={id}>
          <Note className="note" onClick={onNoteClick.bind(null, id)}>
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

// class Notes extends React.Component{
//   render(){
//   const {notes, onNoteClick, onEdit, onDelete} = this.props;
//   console.log(notes);
//   notes.map(({id, task, isEditing}) => console.log(id, isEditing, task));
//   return (
//     <ul className="notes">{notes.map( ({id, task, isEditing}) =>
//             <li key={id}>
//               <Note className="note" onClick={onNoteClick.bind(null, id)}>
//                 <Editable
//                     className="editable"
//                     editing = {isEditing}
//                     value = {task}
//                     onEdit = {onEdit.bind(null, id)}/>
//                 <button
//                   className="delete"
//                   onClick={onDelete.bind(null, id)}>x</button>
//               </Note>
//             </li>
//       )}</ul>
//     );
//   }
// }

export default Notes;
