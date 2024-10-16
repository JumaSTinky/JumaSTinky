import { useState } from "react";
import Button from "../Button/Button";
import "./TodoForm.css";

export default function TodoForm({ onSubmit, onClear }) {
  const [todoValue, setTodoValue] = useState("");

  const handleTodoInputChange = (event) => {
    setTodoValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoValue.trim() == "") {
      alert("enter something!");
      return;
    }
    onSubmit(todoValue);
    setTodoValue("");
  };
  return (
    <div>
      <h1 className="main-title">JS-15 Todo List </h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add new list item"
          value={todoValue}
          onChange={handleTodoInputChange}
        />

        <section className="button-block">
          <Button variant="green" type="submit">
            add todo
          </Button>
          <Button variant="red" type="button" onClick={onClear}>
            clear all
          </Button>
        </section>
      </form>
    </div>
  );
}
