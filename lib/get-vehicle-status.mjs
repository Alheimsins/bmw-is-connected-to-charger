import axios from 'axios'

async function getVehicleStatus ({ token, vin }) {
  const url = `https://b2vapi.bmwgroup.com/api/vehicle/service/v1/${vin}`
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.error(error)
    return false
  }
}

export default getVehicleStatus
