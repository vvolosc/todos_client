import React from 'react'
import { TodoItem } from './TodoItem'
import { Todo } from '../types'

interface TodoListProps {
  title: string
  todos: Todo[]
}

export const TodoList = ({ title, todos }: TodoListProps) => {
  return (
    <div className="flex grow flex-col">
      <span className="border-b-2 border-slate-500 text-2xl">{title}</span>
      {todos.map((todo) => (
        <TodoItem key={todo._id} {...todo} />
      ))}
    </div>
  )
}
