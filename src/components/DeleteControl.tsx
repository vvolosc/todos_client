import React from 'react'

import { useAppDispatch, deleteTodos } from '../store'

export const DeleteControl = () => {
  const dispatch = useAppDispatch()

  return (
    <button
      className="text-sm text-blue-700 underline underline-offset-2"
      onClick={() => dispatch(deleteTodos())}
    >
      Delete all tasks
    </button>
  )
}
