import React from 'react';
import './todo-list-item.css'

class TodoListItem extends React.Component {
  render() {
    const {label, onToggleImportant, onToggleDone, done, important} = this.props;
    let className = `todo-list-item`
    if (done) {
      className += ` done`;
    }

    if (important) {
      className += ` important`;
    }

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>
        <button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger" onClick={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span >
    )
  }
}
export default TodoListItem;