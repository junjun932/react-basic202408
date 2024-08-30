const TodoList = ({ todos, onToggleCompleted, onDelete }) => {
  return (
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
  );
};
export default TodoList;
