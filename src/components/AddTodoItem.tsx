import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string, description: string) => void;
}

export default function AddTodoItem({ onSubmit }: AddTodoFormProps) {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titleInput.trim() || !descInput.trim()) return;
    setTitleInput("");

    onSubmit(titleInput, descInput);
    setTitleInput("");
    setDescInput("");
  }
  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        value={titleInput}
        className="shadow-sm shadow-gray-600 shadow-inner flex flex-col rounded-xl mt-4 p-1 justify-center text-center"
        placeholder="Todo Name"
        type="text"
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <input
        value={descInput}
        className="shadow-sm shadow-gray-600 shadow-inner flex flex-col rounded-xl mt-4 p-6 justify-center text-center"
        placeholder="Todo Description"
        type="text"
        onChange={(e) => setDescInput(e.target.value)}
      />
      <button
        className="hover:shadow-md hover:shadow-black transition-all bg-green-300 border border-gray shadow-inner shadow-lg shadow-gray-500 shadow text-black rounded-xl p-2 flex flex-col m-2 justify-center"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
