export type FilterType = "all" | "active" | "completed";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoStore = {
  todos: Todo[];
  filter: FilterType;

  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
};
