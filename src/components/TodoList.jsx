import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { useContext } from "react";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
export default TodoList;
