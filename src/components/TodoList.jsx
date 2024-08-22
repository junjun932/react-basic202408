import { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTodo.trim().length == 0) {
      alert("type whateva");
      return;
    }

    let newTodos = {
      id: crypto.randomUUID(),
      text: newTodo,
    };
    setTodos([...todos, newTodos]);
    setNewTodo("");
  };
  
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         id: todo.id,
  //         text: todo.text,
  //         completed: !todo.completed,
  //       };
  //     } else {
  //       return todo;
  //     }
  //   });
  // };
const handleDelete = (id) => {
 const filtertedTodos =todos.filter ((todo)=>{
  if (todo.id === id) {
    return false;
  }
  return true;
 })
 setTodos(filtertedTodos);
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Hit you with that todo todo"
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p></p>
            {todo.text} - {String(todo.completed)}
            <button onClick={() => toggleCompleted(todo.id)}>완료</button>
            <button onCLick= {(handleDelete(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
