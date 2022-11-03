import { User } from '../interfaces'
import axios from 'axios'

export async function loadTemp() {
  const res = await axios.get('http://localhost:3000/api')
  const item: Array<User> = res.data
  const value = (item.at(-1).name)

  return value
}

