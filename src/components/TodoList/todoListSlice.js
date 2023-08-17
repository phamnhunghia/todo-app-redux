//--------------------------- redux core
// const initState = [
//   { id: 1, name: 'Learn React', completed: false, priority: 'High' },
//   { id: 2, name: 'Learn Redux', completed: true, priority: 'Medium' },
//   { id: 3, name: 'Learn Javascript', completed: false, priority: 'Low' },
// ]

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload]

//     case 'todoList/toggleTodoStatus':
//       return state.map((todo) => {
//         return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       })
//     default:
//       return state
//   }
// }

// export default todoListReducer

//--------------------------- redux toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] }, // [] => { status: '', todos: [] }
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }, // action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.status = 'idle'
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
      })
      .addCase(updateStatusTodo.fulfilled, (state, action) => {
        let currentTodo = state.todos.find((todo) => todo.id === action.payload)
        // eslint-disable-next-line no-unused-vars
        currentTodo = action.payload
      })
  },
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch('/api/todos').then((res) => res.json())
  return res.todos
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
  const res = await fetch('/api/todo', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  }).then((res) => res.json())
  return res.todos
})

export const updateStatusTodo = createAsyncThunk('todos/updateStatusTodo', async (updatedTodo) => {
  const res = await fetch('/api/updateTodo', {
    method: 'POST',
    body: JSON.stringify(updatedTodo),
  }).then((res) => res.json())
  console.log(res.todos)
  return res.todos
})

/**
 * => todos/fetchTodos/pendding
 * => todos/fetchTodos/fulfilled
 * => todos/fetchTodos/rejected
 */

export default todoListSlice

// action (object) and action creator () => { return action }
// thunk action (function) va thunk action creator () => { return thunk action }

// export const addTodos = (todo) => {
//   //thunk function - thunk action
//   return function addTodosThunk(dispatch, getState) {
//     console.log('addTodosThunk', getState())
//     console.log({ todo })

//     // custom
//     todo.name = 'Tung test update'
//     dispatch(todoListSlice.actions.addTodo(todo))
//     console.log('addTodosThunk after', getState())
//   }
// }
