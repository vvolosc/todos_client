import React, { ChangeEvent } from 'react'

import { useAppDispatch, searchTodos, fetchTodos } from '../store'

export const SearchControl = () => {
  const dispatch = useAppDispatch()

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value
      ? dispatch(searchTodos(e.target.value))
      : dispatch(fetchTodos())
  }

  return (
    <input
      placeholder="Search"
      className="border-solid border rounded border-slate-500 p-2"
      onChange={searchHandler}
    />
  )
}
