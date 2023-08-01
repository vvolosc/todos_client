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
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        className="ml-4 rounded rounded border border-solid border-slate-500 bg-sky-500/75 px-4 py-2"
        onClick={add}
      >
        Add
      </button>
    </div>
  )
}
