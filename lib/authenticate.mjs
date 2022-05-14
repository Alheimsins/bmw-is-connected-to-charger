import axios from 'axios'
import querystring from 'querystring'

import { AUTH } from './constants.mjs'

async function authenticate ({ username, password }) {
  const { url, formData, headers } = AUTH
  const { state, clientId, redirectUri, responseType, scope, locale } = formData
  const query = querystring.stringify({
    state,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope,
    username,
    password,
    locale
  })

  try {
    const { data } = await axios.post(url, query, { headers })
    console.log(data)
  } catch (error) {
    console.error(error)
  }

  return { username, password }
}

export default authenticate
