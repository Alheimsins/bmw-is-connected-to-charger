export const AUTH = {
  url: 'https://customer.bmwgroup.com/gcdm/oauth/authenticate',
  formData: {
    state: 'onelogin_aHR0cHM6Ly93d3cuYm13Lm5vL25vL3Nob3AvbHMvY3AvY29ubmVjdGVkLWRyaXZlP3JlY2FsY3VsYXRlPXRydWU',
    clientId: 'f195e93a-6bbd-46f3-b762-6cf0bea480b0',
    redirectUri: 'https://www.bmw.no/no/shop/ls/token',
    responseType: 'token',
    scope: 'svds authenticate_user remote_services vehicle_data smacc fupo cesim'
  },
  headers: {
    Host: 'customer.bmwgroup.com',
    Origin: 'https://customer.bmwgroup.com',
    'Accept-Encoding': 'br, gzip, deflate',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0 Mobile/15B150 Safari/604.1'
  }
}

export const REGIONS = {
  us: 'https://b2vapi.bmwgroup.us',
  eu: 'https://b2vapi.bmwgroup.com',
  cn: 'https://b2vapi.bmwgroup.cn:8592'
}
