import type { Todo } from "../types";

export const saveTodos = (newTodos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(newTodos));
};
