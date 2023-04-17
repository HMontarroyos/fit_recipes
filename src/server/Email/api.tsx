import axios from 'axios'

const baseUrl = 'http://localhost:3000/email'

const api = axios.create({ baseURL: baseUrl })

interface EmailData {
  name: string
  email: string
  message: string
}

export const saveEmailData = async (emailData: EmailData): Promise<any> => {
  try {
    const response = await api.post(baseUrl, emailData)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('Error saving email data')
  }
}
