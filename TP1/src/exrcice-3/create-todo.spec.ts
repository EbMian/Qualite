import { describe, it, expect, vi, Mock } from 'vitest';
import { createTodo, Todo } from './create-todo';
 
describe('createTodo', () => {
  it('devrait créer une tâche et retourner la tâche créée avec un identifiant', async () => {
    const mockTodo: Todo = { label: 'Test task', completed: false };
    const mockResponse = { id: 123, ...mockTodo };
 
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ) as Mock);
 
    const result = await createTodo(mockTodo);
    expect(result).toEqual(mockResponse);
    expect((fetch as Mock)).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(mockTodo),
    });
  });
 
  it('devrait lancer une erreur si la requête API échoue', async () => {
    const mockTodo: Todo = { label: 'Test task', completed: false };
 
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as Mock);
 
    await expect(createTodo(mockTodo)).rejects.toThrow("La tâche n'a pas pu être créée");
  });
});