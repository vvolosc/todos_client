import React, { ChangeEvent } from 'react'

import { useAppDispatch, searchTodos, fetchTodos } from '../store'

export const SearchControl = () => {
  const dispatch = useAppDispatch()

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value ? dispatch(searchTodos(e.target.value)) : dispatch(fetchTodos())
  }

  return <input type="text" placeholder="Search" onChange={searchHandler} />
}
