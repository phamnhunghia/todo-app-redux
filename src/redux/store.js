//--------------------------- redux core
// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store

//--------------------------- redux toolkit
// When using redux toolkit, so don't use actions and reducer files in redux folder
import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filtersSlice'
import todoListSlice from '../components/TodoList/todoListSlice'

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
})

export default store
