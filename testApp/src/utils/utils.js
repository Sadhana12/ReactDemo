import store from '../store';


export function GetState() {
  return store.getState();

}

export function GetStateValues() {

  const state = store.getState();

  return state.strData;;
}


/*export function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: nextTodoId(state.todos),
              text: action.payload,
              completed: false
            }
          ]
        }
  */
  /*
    export function saveNewUser(text) {
      
          return async function saveNewTodoThunk(dispatch, getState) {
            const initialTodo = { text }
            const response = await client.post('/fakeApi/todos', { todo: initialTodo })
            dispatch({ type: 'todos/todoAdded', payload: response.todo })
          }
          
        }
    */