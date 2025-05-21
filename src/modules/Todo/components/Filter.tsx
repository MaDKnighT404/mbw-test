import useTodoStore from "../store";
import { FILTER_TYPES } from "../constants";

import Button from "@shared/components/Button";

const Filter = () => {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);

  const getButtonVariant = (filterType: string) => (filter === filterType ? "active" : "default");

  return (
    <div className="flex space-x-2">
      <Button
        onClick={() => setFilter(FILTER_TYPES.ALL)}
        variant={getButtonVariant(FILTER_TYPES.ALL)}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter(FILTER_TYPES.ACTIVE)}
        variant={getButtonVariant(FILTER_TYPES.ACTIVE)}
      >
        Active
      </Button>
      <Button
        onClick={() => setFilter(FILTER_TYPES.COMPLETED)}
        variant={getButtonVariant(FILTER_TYPES.COMPLETED)}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filter;
