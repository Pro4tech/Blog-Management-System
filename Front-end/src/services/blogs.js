import axios from 'axios'
import config from '../config'
export async function GetAllBlogs() {
    // Make API Call
    const response = await axios.get(`${config.url}/blog/view`)
    // Reading JSON data
    return response.data
}
export async function GetSpecficBlog(title) {
    // body parameters
    const body = {
        title,
    }

    // make API call
    const response = await axios.post(`${config.url}/blog/search`, body)

    // read JSON data (response)
    return response.data
}
export async function GetSpecficBlogUser(user_id) {
    // body parameters
    const body = {
        user_id
    }

    // make API call
    const response = await axios.post(`${config.url}/blog/user`, body)

    // read JSON data (response)
    return response.data
}
export async function GetSpecficBlogId(id) {
    // body parameters
    const body = {
        id
    }

    // make API call
    const response = await axios.post(`${config.url}/blog/id`, body)

    // read JSON data (response)
    return response.data
}
export async function EditSpecficBlogId(id, title, content, category) {
    // body parameters
    const body = {
        blog_id:id,
        title, 
        content, 
        category_id:category
    }

    // make API call
    const response = await axios.put(`${config.url}/blog/edit`, body)

    // read JSON data (response)
    return response.data
}

export async function addBlogs(title, content,user_id,category) {
    // body parameters
    const body = {
        title, 
        content, 
        user_id,
        category_id:category
    }

    // make API call
    const response = await axios.post(`${config.url}/blog/create`, body)

    // read JSON data (response)
    return response.data
}
export async function DeleteBlog(blog_id) {
    // body parameters
    const body = {
        blog_id
    }

    // make API call
    const response = await axios.delete(`${config.url}/blog/delete`, {data:body})

    // read JSON data (response)
    return response.data
}



