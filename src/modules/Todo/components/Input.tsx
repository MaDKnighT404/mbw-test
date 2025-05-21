import { useState, type KeyboardEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import useTodoStore from "../store";

const Input = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (!text.trim()) return;

    addTodo({
      id: uuidv4(),
      text,
      completed: false,
    });

    setText("");
  };

  return (
    <div className="relative bg-[#FEFEFE] border-b border-b-[#909090] ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-300 ">
        <svg
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <input
        type="text"
        className="w-full px-10 py-4 text-xl text-gray-700  outline-none"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
