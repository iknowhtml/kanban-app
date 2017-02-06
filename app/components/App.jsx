import React, {PropTypes} from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import {connect} from 'react-redux';
import laneActionCreators from '../actions/laneActionCreators';
import Lanes from './Lanes';

class App extends React.Component{
  render(){
    const {dispatch, lanes} = this.props;
    return(
      <div>
        <button className='add-lane' onClick={() => dispatch(laneActionCreators.addLane())}>+</button>
        <Lanes lanes={lanes}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    lanes: state.lanesReducer
  }
}

export default connect(mapStateToProps)(App);
