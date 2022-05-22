import axios from 'axios'

async function getVehicles ({ token }) {
  const headers = {
    'Content-Type': 'application/json',
    'User-agent': 'Dart/2.13 (dart:io)',
    'x-user-agent': 'android(v1.07_20200330);bmw;2.3.0(13603)',
    Authorization: `Bearer ${token}`
  }

  const url = 'https://cocoapi.bmwgroup.com/eadrax-vcs/v2/vehicles'

  try {
    const { data } = await axios.get(url, { headers })
    return { vin: data[0].vin }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default getVehicles
