import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

function TodoContainer() {
  
  const todos = useSelector(state => state.todos.entities);
  console.log(todos)

  return (
  <ul>
    {todos.map(todo => <Todo key={todo} todo={todo}/>)}
  </ul>
  )
}

export default TodoContainer;
