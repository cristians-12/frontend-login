// import axios from "axios";
import axios from './axios';

// const URL = 'http://localhost:3000/app'
// const URL = 'https://backend-login-3ru0.onrender.com/app'

// export const soliRegistro = (user)=> axios.post(`${URL}/register`, user)
// export const soliLogin = (user)=>axios.post(`${URL}/login`,user)

export const soliRegistro = (user)=> axios.post(`/register`, user)
export const soliLogin = (user)=>axios.post(`/login`,user)
export const verifToken = ()=>axios.get('/verify')