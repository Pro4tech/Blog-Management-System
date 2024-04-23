import { useNavigate } from "react-router-dom"
import { DeleteBlog } from "../services/blogs"
import { useState } from "react"
import { toast } from "react-toastify"

function BlogList({id,title,content}){
    const [state,setState]=useState()
    const navigate=useNavigate()
    const OnEdit=()=>{
        sessionStorage['Blog_id']=id
        alert("Clicked on Edit")
        navigate('/editBlog')

    }
    const OnCancel=()=>{
        sessionStorage['Blog_id']=id
        DeleteBlog(id)
        sessionStorage.removeItem('Blog_id')
        toast.warning("Blog Removed,Please Reload Page")
        navigate('/home')
        // setState("")
        // Invoke call to delete Blog
    }
    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td>
                <button className="btn btn-primary me-2" onClick={OnEdit}><i class="bi bi-pencil-fill"></i></button>
                <button className="btn btn-primary me-2" onClick={OnCancel}><i class="bi bi-x-circle-fill"></i></button>
            </td>
        </tr>
    )
}
export default BlogList