import { useNavigate } from "react-router-dom"
import { DeleteCategory } from "../services/category"
import { toast } from "react-toastify"

function CategoryList({ id, title, description }) {
    const navigate=useNavigate()
    const OnEdit=()=>{
        sessionStorage['category_id']=id
        alert("Clicked on Edit")
        navigate('/editCat')

    }
    const OnCancel=()=>{
        sessionStorage['category_id']=id
        DeleteCategory(id)
        sessionStorage.removeItem('category_id')
        toast.warning("Category Removed,Please Reload Page")
        navigate('/home')
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>
                <button className="btn btn-primary me-2" onClick={OnEdit}><i className="bi bi-pencil-fill"></i></button>
                <button className="btn btn-primary me-2" onClick={OnCancel}><i className="bi bi-x-circle-fill"></i></button>
            </td>
        </tr>
    )
}
export default CategoryList