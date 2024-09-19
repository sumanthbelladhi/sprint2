// TodoList.js
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo} <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
