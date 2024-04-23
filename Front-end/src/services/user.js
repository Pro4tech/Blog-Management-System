import axios from 'axios'
import config from '../config'
export async function RegisterUser(email, password, fullname, phoneNo) {
    const body = {
        fullname: fullname,
        email: email,
        password: password,
        phone_no: phoneNo
    }
    // Make API Call
    const response = await axios.post(`${config.url}/user/register`, body)
    // Reading JSON data
    return response.data
}
export async function LoginUser(email, password) {
    // body parameters
    const body = {
        email,
        password,
    }

    // make API call
    const response = await axios.post(`${config.url}/user/login`, body)

    // read JSON data (response)
    return response.data
}