import Filter from "./components/Filter";
import Input from "./components/Input";
import List from "./components/List";

import Button from "@shared/components/Button";
import useTodoStore from "./store";

const Todo = () => {
  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const itemsLeftText = activeTodosCount === 1 ? "item left" : "items left";

  return (
    <div className="min-h-screen bg-gray-100 pt-10">
      <h1 className="text-center text-6xl font-thin text-[#f3c8c5] my-4">Todos</h1>
      <div className="relative max-w-lg mx-auto z-10">
        <div className="bg-white shadow-md">
          <div className="bg-white">
            <Input />
            <List />
            {todos.length > 0 && (
              <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-500">
                <span>
                  {activeTodosCount} {itemsLeftText}
                </span>
                <Filter />
                <Button onClick={clearCompleted} variant="default">
                  Clear completed
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="absolute -bottom-1 left-1 right-1 h-2 bg-white shadow-md -z-10" />
        <div className="absolute -bottom-2 left-2 right-2 h-2 bg-white shadow-md -z-20" />
      </div>
    </div>
  );
};

export default Todo;
