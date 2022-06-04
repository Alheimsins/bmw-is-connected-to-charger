import axios from 'axios'

import { generateHeaders } from './generate-headers.mjs'

async function getVehicles ({ token }) {
  const headers = generateHeaders({ token })

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
