import useTodoStore from "../store";
import type { Todo } from "../types";

import { cn } from "@shared/utils/cn";

const Item = ({ todo }: { todo: Todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <li className="flex items-center px-2 py-3 border-b border-b-[#CACACA]">
      <div
        data-testid={`todo-checkbox`}
        className={cn(
          "w-6 h-6 rounded-full border mr-3 flex items-center justify-center cursor-pointer",
          todo.completed ? "border-green-500" : "border-gray-300"
        )}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span
        className={`flex-grow ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default Item;
