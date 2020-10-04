import React from 'react';
import './todo-list-item.css'

class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  }

  onLabelClick = () => {
    this.setState((currentState) => {
      return {
        done: !currentState.done
      }
    })
  }

  onMarkImportant = () => {
    this.setState((currentState) => {
      return {
        important: !currentState.important
      }
    })
  }

  render() {
    const {label} = this.props;

    let className = `todo-list-item`

    if (this.state.done) {
      className += ` done`;
    }

    if (this.state.important) {
      className += ` important`;
    }

    return (
      //в зависимости от state элемент будет зачеркнут или нет
      <span className={className}>
        <span
          className="todo-list-item-label"
          // добавляем событие
          onClick={this.onLabelClick}>
          {label}
        </span>
        <button type="button" className="btn btn-outline-success" onClick={this.onMarkImportant}>
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