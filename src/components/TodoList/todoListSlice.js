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
import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn React', completed: false, priority: 'High' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'Medium' },
    { id: 3, name: 'Learn Javascript', completed: false, priority: 'Low' },
  ],
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
})
