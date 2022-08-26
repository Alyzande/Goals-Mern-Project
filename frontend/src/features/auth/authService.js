import axios from 'axios'
//just like used insomnia from external, axios does internally from within app

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  //makes request and puts response into var

  if (response.data) {
    //set item called user, pass it data stringified so it can fit in localstorage
    //data includes token
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  //functions we create we want to export
  register,
  logout,
  login,
}

export default authService