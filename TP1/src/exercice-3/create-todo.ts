/**
 * Structure de base d'une tâche
 */
export type Todo = {
    label: string,
    completed: boolean;
  }
  
  /**
   * Structure d'une tâche lorsque sauvegardée dans l'API
   */
  export type CreatedTodo = Todo & {
    id: number
  };
  
  /**
   * Créer une tâche dans une API
   * @param todo la tâche à créer
   * @returns 
   */
  export async function createTodo(todo: Todo) : Promise<CreatedTodo> {
    // Effectue la requête pour créer la tâche dans l'API
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
    });
  
    // Vérifie que la requête a réussi
    if (!res.ok)
      throw new Error("La tâche n'a pas pu être créée");
  
    // Retourne le contenu de la requête
    return res.json();
  }