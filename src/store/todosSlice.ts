import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import * as todos from '../api/todos'
import { Todo } from '../types'

export interface TodosState {
  completed: Todo[]
  notCompleted: Todo[]
}

const initialState: TodosState = {
  completed: [],
  notCompleted: [],
}

export const fetchTodos = createAsyncThunk('todos/fetchAll', async () => {
  const response = await todos.fetchAll()
  return response.data
})

export const searchTodos = createAsyncThunk(
  'todos/searchAll',
  async (text: string) => {
    const response = await todos.searchAll(text)
    return response.data
  }
)

export const addTodo = createAsyncThunk('todos/add', async (title: string) => {
  await todos.add(title)
  const response = await todos.fetchAll()

  return response.data
})

export const updateTodo = createAsyncThunk(
  'todos/update',
  async ({ _id, completed }: { _id: string; completed: boolean }) => {
    await todos.update(_id, completed)
    const response = await todos.fetchAll()

    return response.data
  }
)
export const deleteTodos = createAsyncThunk('todos/deleteAll', async () => {
  const response = await todos.deleteAll()
  return response.data
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state = action.payload
        return state
      })
      .addCase(deleteTodos.fulfilled, (state) => {
        state = initialState
        return state
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state = action.payload
        return state
      })
      .addCase(searchTodos.fulfilled, (state, action) => {
        state = action.payload
        return state
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state = action.payload
        return state
      })
  },
})

export default todosSlice.reducer
