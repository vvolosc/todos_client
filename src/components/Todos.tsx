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
    <div className="container mx-auto mt-6">
      <div className="content-row">
        <div className="content-col">
          <p className="text-center text-4xl font-medium md:text-left">Marvelous v2.0</p>
        </div>
        <div className="content-col">
          <DeleteControl />
        </div>
      </div>
      <div className="content-row">
        <div className="content-col">
          <AddControl />
        </div>
        <div className="content-col">
          <SearchControl />
        </div>
      </div>
      <div className="content-row">
        <div className="content-col grow basis-full p-0 md:basis-1/2 md:pr-8">
          <TodoList title="To do" todos={todos.notCompleted} />
        </div>
        <div className="content-col grow basis-full p-0 md:basis-1/2 md:pl-8">
          <TodoList title="Done" todos={todos.completed} />
        </div>
      </div>
    </div>
  )
}
