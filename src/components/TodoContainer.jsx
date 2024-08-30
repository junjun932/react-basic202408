import { TODO_SAMPLE } from "../constants/todo-sample";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState(TODO_SAMPLE);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //이벤트의 기본 동작을 막는다

    //새로운 todo 객체생성
    const newTodo = {
      id: crypto.randomUUID(), //랜덤한id생성
      text, //text:text와 같은의미
      isCompleted: false, //할일완료부분
    };
    //새로운 todo 객체를 todos 배열에 추가
    setTodos([...todos, newTodo]);
    //input 태그의 값을 초기화 -> 정리
    setText("");
  };

  const onToggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });
    setTodos(filteredTodos);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.isCompleted ? "완료" : "미완료"}
            <button onClick={() => onToggleCompleted(todo.id)}>
              {todo.isCompleted ? "취소" : "완료"}
            </button>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoContainer;
