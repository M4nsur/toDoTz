import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";

interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

function App() {
  const [todoArr, setTodoArr] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    console.log(todoArr);
    e.preventDefault();
    const newTodo: Todo = {
      id: Date.now(),
      title: todo,
      isDone: false,
    };

    setTodoArr([newTodo, ...todoArr]);
    setTodo("");
  };

  const handleDone = (id: number) => {
    const newArr = todoArr.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      }
      return el;
    });
    setTodoArr(newArr);
  };

  const handleDelete = (id: number) => {
    setTodoArr(todoArr.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <form onSubmit={handleAddTodo} action="">
        <TodoInput handleChange={handleChange} value={todo} />
        <button disabled={!todo.trim()}>ADD TODO</button>
      </form>

      {todoArr.map((el) => {
        return (
          <div className={el.isDone ? "todo-done" : "todo"}>
            <input
              type="checkbox"
              checked={el.isDone}
              onChange={() => handleDone(el.id)}
            />
            <span>{el.title}</span>
            <button onClick={() => handleDelete(el.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
