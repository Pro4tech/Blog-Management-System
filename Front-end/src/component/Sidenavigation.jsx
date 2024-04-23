import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function SideNavigation() {
    const username=sessionStorage.getItem('userName')
    const navigate=useNavigate()
    const onLogout=()=>{
        sessionStorage.removeItem('userid')
        sessionStorage.removeItem('userName')
        toast.success("Logout Successfully")
        navigate('/login')
    }
    return (
        <div className="col-4" style={{ borderRight: "2px solid black", padding: "2em 2em 2em 2em" }} >
            <div style={{color:"red"}}>Hi,{username}</div>
            <div className="mt-3 me-3 ms-3 mb-5"><Link className="btn btn-success" to={'/blogsuser'}>My Blogs</Link></div>
            <div className="mt-3 me-3 ms-3 mb-5"><Link className="btn btn-success" to={'/blogs'}>All Blogs</Link></div>
            <div className="mt-3 me-3 ms-3 mb-5"><Link className="btn btn-success" to={'/addCat'}>Add Category</Link></div>
            <div className="mt-3 me-3 ms-3 mb-5"><Link className="btn btn-success" to={'/Category'}>Show Category</Link></div>
            <div className="mt-3 me-3 ms-3 mb-5"><Link className="btn btn-success" to={'/addBlog'}>Add Blog</Link></div>
            <div className="mt-3 me-3 ms-3 mb-5"><Link className="btn btn-success" to={'/search'}>Search Blog</Link></div>
            <div className="mt-3 me-3 ms-3 mb-5"><button className="btn btn-success" onClick={onLogout}>Logout</button></div>
        </div>
    )
}
export default SideNavigation