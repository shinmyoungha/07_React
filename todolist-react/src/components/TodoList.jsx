import { useState } from "react";
import "../TodoList.css"; // 기존 CSS 사용 (필요 시 수정)

const TodoList = () => {
  // todo 목록 상태
  const [todoList, setTodoList] = useState([]);
  // 입력값 상태
  const [inputValue, setInputValue] = useState("");
  // 로딩 및 에러 상태 (선택적 추가)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Todo 추가 이벤트 핸들러
  const handleAddTodo = () => {
    if (!inputValue.trim()) {
      setError("할 일을 입력해주세요.");
      return;
    }
    setLoading(true);
    setError(null);
    // 새로운 Todo 추가
    setTodoList([...todoList, { title: inputValue, isDone: false, _id: Date.now() }]);
    setInputValue(""); // 입력값 초기화
    setLoading(false);
  };

  // 완료/미완료 토글 이벤트 핸들러
  const handleToggleTodo = (index) => {
    const newTodoList = todoList.map((todo, i) =>
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(newTodoList);
  };

  // Todo 삭제 이벤트 핸들러
  const handleDeleteTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo-container">
      <h1>나의 TodoList</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="todo-input-group">
        <input
          type="text"
          value={inputValue}
          placeholder="할 일을 입력하세요"
          onChange={(e) => {
            setInputValue(e.target.value);
            setError(null); // 입력 시 에러 메시지 초기화
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          disabled={loading}
        />
        <button onClick={handleAddTodo} disabled={loading}>
          추가
        </button>
      </div>

      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={todo._id}>
            <span
              onClick={() => handleToggleTodo(index)}
              className={`todo-title ${todo.isDone ? "done" : ""}`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => handleToggleTodo(index)}
              disabled={loading}
            >
              {todo.isDone ? "미완료" : "완료"}
            </button>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="todo-delete-btn"
              disabled={loading}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;