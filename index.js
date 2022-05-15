import authenticate from './lib/authenticate.mjs'
import getVehicles from './lib/get-vehicles.mjs'
import getVehicleStatus from './lib/get-vehicle-status.mjs'

async function bmwIsConnectedToCharger ({ username, password }) {
  const { token } = await authenticate({ username, password })
  const vehicles = await getVehicles({ token })
  const vin = vehicles[0].vin
  const status = await getVehicleStatus({ token, vin })
  return status
}

export default bmwIsConnectedToCharger
