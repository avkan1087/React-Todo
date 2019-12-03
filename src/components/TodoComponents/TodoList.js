// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import './TodoList.css';

const TodoList = props => {
  return (
    <div className="done-list">
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleDone={props.toggleDone} />
      ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;
