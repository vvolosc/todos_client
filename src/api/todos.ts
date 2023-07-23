import axios from 'axios'

const url = process.env.REACT_APP_SERVER_URL + '/todos'
export const fetchAll = () => axios.get(url)

export const searchAll = (text: string) => axios.get(`${url}?title=${text}`)

export const add = (title: string) => axios.post(url, { title })
export const update = (id: string, completed: boolean) =>
  axios.patch(`${url}/${id}`, { completed })
export const deleteAll = () => axios.delete(url)
