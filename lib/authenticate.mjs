import axios from 'axios'

import { AUTH, HEADERS } from './constants.mjs'

async function authenticate ({ username, password }) {
  const { url, formData } = AUTH
  const { headers } = HEADERS
  const { state, clientId, redirectUri, responseType, scope } = formData
  const queryParams = new URLSearchParams({
    state,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope,
    username,
    password
  })
  const query = queryParams.toString()

  try {
    const response = await axios.post(url, query, { headers })
    const queryStringFromHash = new URL(response.request.res.responseUrl).hash.slice(1)
    const params = new URLSearchParams(queryStringFromHash)
    const accessToken = params.get('access_token')
    return { token: accessToken }
  } catch (error) {
    console.error(error)
  }

  return { username, password }
}

export default authenticate
