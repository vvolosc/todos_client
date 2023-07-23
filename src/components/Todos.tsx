import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchTodos, TodosState, useAppDispatch } from '../store/'
import { TodoList } from './TodoList'
import { DeleteControl } from './DeleteControl'
import { AddControl } from './AddControl'
import { SearchControl } from './SearchControl'

export const Todos = () => {
  const dispatch = useAppDispatch()
  const todos = useSelector((state: { todos: TodosState }) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="flex flex-col m-8 p-8 border-solid border rounded border-slate-500">
      <div className="flex flex-row justify-between">
        <p className="text-4xl font-medium">Marvelous v2.0</p>
        <DeleteControl />
      </div>
      <div className="flex flex-row justify-between py-8">
        <AddControl />
        <SearchControl />
      </div>
      <div className="flex flex-row justify-between pt-4">
        <div className="basis-1/2 pr-8">
          <TodoList title="To do" todos={todos.notCompleted} />
        </div>
        <div className="basis-1/2 pl-8">
          <TodoList title="Done" todos={todos.completed} />
        </div>
      </div>
    </div>
  )
}
