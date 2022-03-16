/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    firebase_apiKey: 'AIzaSyDRQMsJSZJo5Zq82s0OSQAyq7gP-9ChFOU',
    firebase_authDomain: 'comms-app-770ee.firebaseapp.com',
    firebase_projectId: 'comms-app-770ee',
    firebase_storageBucket: 'comms-app-770ee.appspot.com',
    firebase_messagingSenderId: '809737978955',
    firebase_appId: '1:809737978955:web:19c56d864cbbfe614bb9ce',
    firebase_measurementId: 'G-TTH0Q09DT4',
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}
