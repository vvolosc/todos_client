import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

export * from './todosSlice'
export * from './useAppDispatch'
