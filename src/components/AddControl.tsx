import React, { useState } from 'react'

import { useAppDispatch, addTodo } from '../store'
export const AddControl = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const add = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <div>
      <input
        className="border-solid border rounded border-slate-500 p-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-sky-500/75 px-4 py-2 rounded border-solid border rounded border-slate-500 ml-4"
        onClick={add}
      >
        Add
      </button>
    </div>
  )
}
