import { it, describe, Mock } from "vitest";

describe("Tests de création de tâche todo", () => {
  const todo =   {
    "name": "Super tâche",
    "completed": false
  }
  it('Doit retourner "name": "Super tâche", "completed": false, "id": 201', async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
    });
    expect
  });

        
});
