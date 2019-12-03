import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './app.css';


const todo = [];

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  addItem = newItemText => {
    const newItem = {
      name: newItemText,
      id: Date.now(),
      done: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleDone = (item) => {
    item.done = !item.done;
    this.setState(this.state)
  }

  clearDone = () => {
    const completedItems = this.state.todo.filter((item)=> item.done);
    completedItems.forEach((item)=> {
      const index = this.state.todo.indexOf(item);
      this.state.todo.splice(index, 1);
    })
    this.setState(this.state)
  }

  render() {
    
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList todo={this.state.todo} toggleDone={this.toggleDone} clearDone={this.clearDone} />
      </div>
    );
  }
}

export default App;
