import { getInitialTodos } from "../helpers/getInitialTodos";
import { saveTodos } from "../helpers/saveTodos";

import type { Todo } from "../types";

describe("Todo helpers", () => {
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    mockLocalStorage = {};
    const localStorageMock = {
      getItem: (key: string) => mockLocalStorage[key] || null,
      setItem: (key: string, value: string) => {
        mockLocalStorage[key] = value;
      },
    };
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  describe("getInitialTodos", () => {
    it("should return empty array when localStorage is empty", () => {
      const result = getInitialTodos();
      expect(result).toEqual([]);
    });

    it("should return parsed todos from localStorage", () => {
      const mockTodos: Todo[] = [
        { id: "1", text: "Test todo", completed: false },
        { id: "2", text: "Another todo", completed: true },
      ];
      localStorage.setItem("todos", JSON.stringify(mockTodos));

      const result = getInitialTodos();
      expect(result).toEqual(mockTodos);
    });
  });

  describe("saveTodos", () => {
    it("should save todos to localStorage", () => {
      const mockTodos: Todo[] = [
        { id: "1", text: "Test todo", completed: false },
        { id: "2", text: "Another todo", completed: true },
      ];

      saveTodos(mockTodos);

      const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
      expect(savedTodos).toEqual(mockTodos);
    });
  });
});
