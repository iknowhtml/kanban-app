import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const Note = ({connectDragSource, connectDropTarget, onMove, id, laneId, editing, children, ...props}) => {
  const dragSource = editing ? a => a : connectDragSource;
  return compose(dragSource, connectDropTarget)(
      <div {...props}>
        {children}
      </div>
    );
}

const noteSource = {
  beginDrag(props){
    return{
      id: props.id
    };
  }
};

const noteTarget = {
  hover(targetProps, monitor){
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const targetLaneId = targetProps.laneId;
    if(sourceId !== targetId){
      targetProps.onMove(sourceId, targetLaneId, targetId);
    }
  }
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, connect => ({connectDragSource: connect.dragSource()})),
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({connectDropTarget: connect.dropTarget()}))
)(Note);
