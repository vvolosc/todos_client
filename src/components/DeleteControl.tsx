import React from 'react'

import { useAppDispatch, deleteTodos } from '../store'

export const DeleteControl = () => {
  const dispatch = useAppDispatch()

  return (
    <button
      className="underline underline-offset-2 text-blue-700 text-sm"
      onClick={() => dispatch(deleteTodos())}
    >
      Delete all tasks
    </button>
  )
}
