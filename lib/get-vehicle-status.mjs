import axios from 'axios'

import { generateHeaders } from './generate-headers.mjs'

async function getVehicleStatus ({ token, vin }) {
  const headers = generateHeaders({ token })

  const url = `https://cocoapi.bmwgroup.com/eadrax-vcs/v2/vehicles/${vin}/state`

  try {
    const { data } = await axios.get(url, { headers })
    const { state } = data
    return {
      isConnected: state.electricChargingState.isChargerConnected,
      batteryLevel: state.electricChargingState.chargingLevelPercent,
      location: state.location
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default getVehicleStatus
