import axios from 'axios'

const baseUrl = 'https://api-fit-recipes.vercel.app/recipes'
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
