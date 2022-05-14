export const AUTH = {
  url: 'https://customer.bmwgroup.com/gcdm/oauth/authenticate',
  formData: {
    state: 'eyJtYXJrZXQiOiJubyIsImxhbmd1YWdlIjoibm8iLCJkZXN0aW5hdGlvbiI6ImxhbmRpbmdQYWdlIiwicGFyYW1ldGVycyI6Int9In0',
    clientId: 'dbf0a542-ebd1-4ff0-a9a7-55172fbfce35',
    redirectUri: 'https://www.bmw-connecteddrive.com/app/static/external-dispatch.html',
    responseType: 'token',
    scope: 'authenticate_user vehicle_data',
    locale: 'GB-en'
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
