import { useState } from "react";

function App() {
  //할 일 목록앱
  const [value, setValue] = useState("");
  const [todoLists, setTodoList] = useState([
    {
      id: 1,
      title: "할일 1",
      isDone: false,
    },
  ]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!value) {
      alert("내용을 입력해주세요");
      return;
    }
    const nextTodo = {
      id: new Date().getTime(),
      title: value,
    };

    setTodoList([...todoLists, nextTodo]);
    setValue("");
  };

  const handleDel = (id) => {
    const filteredLists = todoLists.filter((todo) => todo.id !== id);
    setTodoList(filteredLists);
  };

  const handleToggleTodo = (id) => {
    setTodoList(
      todoLists.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={value} onChange={handleOnChange} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoLists.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.title}
              <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => handleDel(todo.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
