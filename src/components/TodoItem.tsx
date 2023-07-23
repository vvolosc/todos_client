import React from 'react'

import { useAppDispatch, updateTodo } from '../store'
import { Todo } from '../types'

export const TodoItem = ({ _id, title, completed }: Todo) => {
  const dispatch = useAppDispatch()

  const handleToggleComplete = () =>
    dispatch(updateTodo({ _id, completed: !completed }))

  return (
    <div className="py-4 flex flex-row">
      <input
        type="checkbox"
        checked={completed}
        className="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0 hover:cursor-pointer"
        onChange={handleToggleComplete}
      />
      <span
        className="ml-2 hover:cursor-pointer"
        onClick={handleToggleComplete}
      >
        {title}
      </span>
    </div>
  )
}
