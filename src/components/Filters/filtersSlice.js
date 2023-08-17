//--------------------------- redux core
// const initState = {
//   search: '',
//   status: 'All',
//   priorities: [],
// }

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         search: action.payload,
//       }

//     case 'filters/statusFilterChange':
//       return {
//         ...state,
//         status: action.payload,
//       }

//     case 'filters/prioritiesFilterChange':
//       return {
//         ...state,
//         priorities: action.payload,
//       }
//     default:
//       return state
//   }
// }

// export default filterReducer

//--------------------------- redux toolkit
import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload
    }, // { type: 'filters/searchFilterChange }
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload
    },
  },
})
