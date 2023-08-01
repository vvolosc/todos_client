import React from 'react'

import { useAppDispatch, updateTodo } from '../store'
import { Todo } from '../types'

export const TodoItem = ({ _id, title, completed }: Todo) => {
  const dispatch = useAppDispatch()

  const handleToggleComplete = () => dispatch(updateTodo({ _id, completed: !completed }))

  return (
    <div className="flex flex-row py-4">
      <input type="checkbox" checked={completed} onChange={handleToggleComplete} />
      <span className="ml-2 hover:cursor-pointer" onClick={handleToggleComplete}>
        {title}
      </span>
    </div>
  )
}
