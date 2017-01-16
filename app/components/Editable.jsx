import React from 'react';

const Editable = ({editing, value, onEdit, ...props}) => {
    return editing ?
    <Edit value={value} onEdit={onEdit} {...props}/> :
    <span {...props}>{value}</span>
}

class Edit extends React.Component{

checkEnter = e => {
  if(e.key === 'Enter'){
    this.finishEdit(e);
  }
}

finishEdit = e => {
  const value = e.target.value;

  if(this.props.onEdit) {
    this.props.onEdit(value);
  }
}
  render() {
    const {value, onEdit, ...props} = this.props;
    console.log(...props);
    return (
      <input type="text"
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        {...props} />
    );
  }
}


export default Editable;
