import { createSelector } from '@reduxjs/toolkit';
export const todosSelector = state => state.todos.items;

export const filterSelector = state => state.filter.filter;

export const filteredTodosSelector = createSelector(
  // Масив вхідних селекторів
  [todosSelector, filterSelector],
  // Функція перетворювач
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
