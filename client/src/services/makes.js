import api from "./api-config";

export const getAllMakes = async () => {
  try {
      const response = await api.get('/makes')
      return response.data
  } catch (error) {
      throw error
  }
}
