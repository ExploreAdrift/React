import React, { useState } from "react";
import { ReactDOM } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const newTodoSubmit = (e) => {
    e.preventDefault();

    if (todo.length == 0) {
      return;
    }

    setTodoList([todo, todoList]);
    setTodo("");
  };

  const newTodoDelete = (deleteIndex) => {
    const deleteTodo = todoList.filter((todo, index) => {
      return index != deleteIndex;
    });
    setTodoList(deleteTodo);
  };

  //   const renderedResults = todoList.map((index) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          newTodoSubmit(e);
        }}
      >
        <div className="ui form">
          <label>ENTER LIST ITEM</label>
          <input className="input" value={todo} type="TEXT" onChange={(e) => setTodo(e.target.value)} />
        </div>
        <button className="ui right labeled icon button primary">
          <i className="right arrow icon"></i>
          ADD TASK
        </button>
      </form>
      <div>{/* <span>{renderedResults}</span> */}</div>
      {todoList.map((todos, index) => {
        return (
          <div key={index}>
            <input type="checkbox" />
            <span>{todos}</span>

            <button
              className="ui button negative"
              onClick={(e) => {
                newTodoDelete(index);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoApp;
