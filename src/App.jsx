import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (inputValue) => {
    const newTodo = {
      title: inputValue,
      id: crypto.randomUUID(),
      completed: false,
    };

    setTodos([...todos, newTodo]);

    console.log(todos);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  const handleCompleteTodo = (todoId) => {
    setTodos(
      todos.map((item) =>
        item.id === todoId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleClearAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <TodoForm onSubmit={handleCreateTodo} onClear={handleClearAllTodos} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onComplete={handleCompleteTodo}
      />
    </div>
  );
}

export default App;
