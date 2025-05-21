import type { Todo } from "../types";

export const getInitialTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
};
