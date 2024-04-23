import axios from 'axios'
import config from '../config'
export async function GetAllCategory() {
    // Make API Call
    const response = await axios.get(`${config.url}/category/display`)
    // Reading JSON data
    return response.data
}
export async function AddCategories(title,description) {
    // body parameters
    const body = {
        title,description
    }
    // make API call
    const response = await axios.post(`${config.url}/category/add`, body)
    // read JSON data (response)
    return response.data
}
export async function DeleteCategory(id) {
    // body parameters
    const body = {
        category_id:id
    }
    // make API call
    const response = await axios.delete(`${config.url}/category/delete`,{data:body} )
    // read JSON data (response)
    return response.data
}