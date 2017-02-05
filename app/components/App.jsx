import React, {PropTypes} from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import {connect} from 'react-redux';
import actionCreator from '../redux/actionCreators'

class App extends React.Component{
  // state = {
  //   notes : [
  //     {
  //       id: uuid.v4(),
  //       task: 'Learn React'
  //     },
  //     {
  //       id: uuid.v4(),
  //       task: 'Do laundry'
  //     }
  //   ]
  // };
  //
  // addNote = () => {
  //   this.setState(
  //     {notes: [...this.state.notes, {id: uuid.v4(), task: 'new task'}]}
  //   );
  // }
  //
  // deleteNote = (id, e) => {
  //   e.stopPropagation();
  //   this.setState({
  //       notes: this.state.notes.filter(note => note.id !== id)
  //   });
  // }
  //
  // activateNoteEdit = (id) => {
  //   this.setState({
  //     notes: this.state.notes.map(note => {
  //       if(note.id === id) {
  //         note.editing = true
  //       }
  //       return note;
  //     })
  //   });
  // }
  //
  // editNote = (id, task) => {
  //   this.setState({
  //     notes: this.state.notes.map(note => {
  //       if(note.id === id){
  //         note.editing = false;
  //         note.task = task;
  //       }
  //       return note;
  //     })
  //   });
  // }

  render(){
    const {dispatch, notes} = this.props;
    console.log(notes);
    return(
      <div>
        <button className="add-note" onClick={() => dispatch(actionCreator.addNote())}>+</button>
        <Notes notes={notes}
          onNoteClick={(id, task) => dispatch(actionCreator.updateNote(id, task))}
          onEdit={id => dispatch(actionCreator.editNote(id))}
          onDelete={id => dispatch(actionCreator.deleteNote(id))}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return{
    notes: state.notesReducer
  }
}

export default connect(mapStateToProps)(App);
