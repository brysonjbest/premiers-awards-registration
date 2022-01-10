import decode from 'jwt-decode'
import auth0 from 'auth0-js'
import Router from 'vue-router'

const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
const CLIENT_ID = 'your_client_id'
const CLIENT_DOMAIN = 'your_client_domain'
const REDIRECT = 'http://localhost:8080/callback'
const SCOPE = 'full_access'
const AUDIENCE = 'your_audience'

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
})

const router = new Router({
  mode: 'history'
})

function clearIdToken () {
  localStorage.removeItem(ID_TOKEN_KEY)
}

function clearAccessToken () {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName (name) {
  const match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  // @ts-ignore
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)
  return date
}

function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)
  // @ts-ignore
  return expirationDate < new Date()
}

const authsvc = {
  login () {
    auth.authorize({
      responseType: 'token id_token',
      redirectUri: REDIRECT,
      audience: AUDIENCE,
      scope: SCOPE
    })
  },
  logout () {
    clearIdToken()
    clearAccessToken()
    // @ts-ignore
    router.go('/')
  },
  getAccessToken () {
    console.log('Get access token...')
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },
  getIdToken () {
    console.log('Get ID token...')
    return localStorage.getItem(ID_TOKEN_KEY)
  },
  isLoggedIn () {
    console.log('Is Logged IN...')
    const idToken = localStorage.getItem(ID_TOKEN_KEY)
    return !!idToken && !isTokenExpired(idToken)
  },
  setAccessToken () {
    const accessToken = getParameterByName('access_token')
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  },
  setIdToken () {
    const idToken = getParameterByName('id_token')
    localStorage.setItem(ID_TOKEN_KEY, idToken)
  },
  getUser () {
    console.log('Get user data...')
  }
}

export default authsvc
