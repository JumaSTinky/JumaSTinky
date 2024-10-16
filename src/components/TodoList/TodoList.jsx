import Button from "../Button/Button";
import "./TodoList.css";

export default function TodoList({ todos, onDelete, onComplete }) {
  return (
    <div className="todo-list-main">
      {todos?.length > 0 ? (
        todos?.map((item) => (
          <div key={item.id} className="todo-item">
            <Button variant="red" onClick={() => onDelete(item.id)}>
              delete
            </Button>

            <p
              className={`todo-title ${item.completed && "completed"}`}
              onClick={() => onComplete(item.id)}
            >
              {item.title}
            </p>
          </div>
        ))
      ) : (
        <p className="text">
          ¯\_(ツ)_/¯
          <br /> No todos yet...
        </p>
      )}
    </div>
  );
}
