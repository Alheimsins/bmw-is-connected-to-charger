import axios from 'axios'

async function getVehicles ({ token }) {
  const url = 'https://b2vapi.bmwgroup.com/api/me/vehicles/v2?all=true&brand=BM'
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  try {
    const { data } = await axios.get(url)
    return { vin: data[0].vin }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default getVehicles
