import AddTodoItem from "./components/AddTodoItem";
import TodoItem from "./components/TodoItem";
import { dummyTodos } from "./data/todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(dummyTodos);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string, description: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        description,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="py-10 bg-blue-300 h-screen">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div>
        <div className="flex flex-col bg-blue-200 rounded-2xl p-1 justify-between m-5">
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              onCompletion={setTodoCompleted}
              key={todo.id}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        <h2 className="text-center font-bold text-xl">Add a Todo</h2>
        <AddTodoItem onSubmit={addTodo}></AddTodoItem>
      </div>
    </main>
  );
}
export default App;
