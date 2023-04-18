/* eslint-disable */
import axios from 'axios'

const baseUrl = 'http://localhost:3000/recipes'
const api = axios.create({ baseURL: baseUrl })

export const getRecipes = async (): Promise<any> => {
  try {
    const response = await api.get(baseUrl)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching recipes')
  }
}

export const getRecipeId = async (id: string): Promise<any> => {
  try {
    const response = await api.get(`${baseUrl}/${id}`)
    return response.data
  } catch(error) {
  throw new Error('Error get recipe')
  }
}
