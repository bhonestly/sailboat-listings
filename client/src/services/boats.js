import api from './api-config'

export const getAllBoats = async () => {
  console.log("getallboatsisrunning")
  try {
      const response = await api.get('/boats')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getBoat = async id => {
  console.log("getboatsisrunning")

  try {
      const response = await api.get(`/boats/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createBoat = async boat => {
  console.log("createboatisrunning")

  try {
      const response = await api.post('/boats', boat)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateBoat = async (id, boat) => {
  console.log("updateboatisrunning")

  try {
      const response = await api.put(`/boats/${id}`, boat)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteBoat = async id => {
  console.log("deleteboatisrunning")

  try {
      const response = await api.delete(`/boats/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}