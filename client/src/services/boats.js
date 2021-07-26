import api from './api-config'

export const getAllBoats = async () => {
  try {
      const response = await api.get('/boats')
      return response.data
  } catch (error) {
      throw error
  }
}