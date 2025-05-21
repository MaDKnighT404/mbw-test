import TodoItem from "./Item";
import useTodoStore from "../store";
import { FILTER_TYPES } from "../constants";
import type { Todo } from "../types";

const List = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);

  const getFilteredTodos = (todos: Todo[]): Todo[] => {
    if (filter === FILTER_TYPES.ACTIVE) return todos.filter((todo) => !todo.completed);
    if (filter === FILTER_TYPES.COMPLETED) return todos.filter((todo) => todo.completed);
    return todos;
  };

  const filteredTodos = getFilteredTodos(todos);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default List;
