import { create } from "zustand";

import { FILTER_TYPES } from "../constants";
import { saveTodos } from "../helpers/saveTodos";
import { getInitialTodos } from "../helpers/getInitialTodos";
import type { TodoStore, Todo } from "../types";

const useTodoStore = create<TodoStore>((set) => {
  const initialTodos = getInitialTodos();

  return {
    todos: initialTodos,
    filter: FILTER_TYPES.ALL,

    addTodo: (todo: Todo) =>
      set((state) => {
        const newTodos = [...state.todos, todo];
        saveTodos(newTodos);
        return { todos: newTodos };
      }),

    toggleTodo: (id: string) =>
      set((state) => {
        const newTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos(newTodos);
        return { todos: newTodos };
      }),

    clearCompleted: () =>
      set((state) => {
        const newTodos = state.todos.filter((todo) => !todo.completed);
        saveTodos(newTodos);
        return { todos: newTodos };
      }),

    setFilter: (filter) => set(() => ({ filter })),
  };
});

export default useTodoStore;
