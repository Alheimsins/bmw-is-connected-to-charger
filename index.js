import authenticate from './lib/authenticate.mjs'
import getVehicles from './lib/get-vehicles.mjs'
import getVehicleStatus from './lib/get-vehicle-status.mjs'

async function bmwIsConnectedToCharger ({ username, password }) {
  const { token, region } = await authenticate({ username, password })
  const vehicles = await getVehicles({ token, region })
  const vin = vehicles[0].vin
  const status = await getVehicleStatus({ token, region, vin })
  return status
}

export default bmwIsConnectedToCharger
