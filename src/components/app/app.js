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
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ],
  }

  // добавляет новое дело в список дел (изменяет массив todoData)
  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: nanoid(10)
    }
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

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />
        <AddListItem onItemAdded={this.addItem} />
      </div>
    );
  }
}

export default App;