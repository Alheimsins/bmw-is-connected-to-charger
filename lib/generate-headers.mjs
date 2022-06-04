function generateHeaders ({ token }) {
  return {
    'Content-Type': 'application/json',
    'User-agent': 'Dart/2.14 (dart:io)',
    'x-user-agent': 'android(SP1A.210812.016.C1);bmw;2.5.2(14945)',
    Authorization: `Bearer ${token}`
  }
}

export { generateHeaders }
