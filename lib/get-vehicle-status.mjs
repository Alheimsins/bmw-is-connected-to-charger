import axios from 'axios'

async function getVehicleStatus ({ token, vin }) {
  const headers = {
    'Content-Type': 'application/json',
    'User-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0 Mobile/15B150 Safari/604.1',
    Authorization: `Bearer ${token}`
  }

  const url = `https://b2vapi.bmwgroup.com/api/vehicle/service/v1/${vin}`
  try {
    const { data } = await axios.get(url, { headers })
    return data
  } catch (error) {
    console.error(error)
    return false
  }
}

export default getVehicleStatus
