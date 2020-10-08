import React from 'react';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import AddListItem from '../add-list-item'
import './app.css';
import nanoid from 'nanoid';

class App extends React.Component {

  state = {
    todoData: [
      this.createTodoItem(`Drink Coffe`),
      this.createTodoItem(`Make Awesome App`),
      this.createTodoItem(`Have a lunch`),
    ]

  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: nanoid(10)
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState((currentState) => {
      return {
        todoData: [...currentState.todoData, newItem]
      }
    })
  };

  deleteItem = (id) => {
    this.setState((currentState) => {
      const indexDeletedElement = currentState.todoData.findIndex((element) => element.id === id);
      const before = currentState.todoData.slice(0, indexDeletedElement);
      const after = currentState.todoData.slice(indexDeletedElement + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      }
    })
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((element) => element.id === id);
      // 1. update object
      const oldItem = todoData[index];
      const newItem = {...oldItem, important: !oldItem.important};
      // 2. construct new array
      const newArray = [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1)
      ]
      return {
        todoData: newArray
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((element) => element.id === id);
      // 1. update object
      const oldItem = todoData[index];
      const newItem = {...oldItem, done: !oldItem.done};
      // 2. construct new array
      const newArray = [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1)
      ]
      return {
        todoData: newArray
      };
    });
  };

  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter((data) => data.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddListItem onItemAdded={this.addItem} />
      </div>
    );
  }
}

export default App;