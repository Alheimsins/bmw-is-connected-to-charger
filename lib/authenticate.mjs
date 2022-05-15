import axios from 'axios'
import querystring from 'querystring'

import { AUTH } from './constants.mjs'

async function authenticate ({ username, password }) {
  const { url, formData, headers } = AUTH
  const { state, clientId, redirectUri, responseType, scope } = formData
  const query = querystring.stringify({
    state,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope,
    username,
    password
  })

  try {
    const response = await axios.post(url, query, { headers })
    const queryStringFromHash = new URL(response.request.res.responseUrl).hash.slice(1)
    const { access_token: accessToken } = querystring.parse(queryStringFromHash)
    return { token: accessToken }
  } catch (error) {
    console.error(error)
  }

  return { username, password }
}

export default authenticate
