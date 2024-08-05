import { Todo } from "../types/todo";

interface TodoProps {
  todo: Todo;
  onCompletion: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompletion, onDelete }: TodoProps) {
  return (
    <div>
      <label className="text-center flex flex-row justify-between items-center p-4 m-2 border rounded-2xl border-gray-500">
        <input
          type="checkbox"
          className="scale-150 flex flex-row m-4"
          checked={todo.completed}
          onChange={(e) => onCompletion(todo.id, e.target.checked)}
        />
        <h2
          className={
            todo.completed ? "line-through text-gray-400 m-2" : "font-bold m-2"
          }
        >
          {todo.title}
        </h2>
        <h2
          className={todo.completed ? "line-through text-gray-400 m-2" : "m-2"}
        >
          {todo.description}
        </h2>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-400 text-black rounded-xl m-2 p-2 font-semibold hover:shadow-md hover:shadow-black transition-all"
        >
          Delete
        </button>
      </label>
    </div>
  );
}
