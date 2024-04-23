
import { useEffect, useState } from "react"
import BlogList from "../component/BlogList"
import SideNavigation from "../component/Sidenavigation"
import { GetAllBlogs } from "../services/blogs"

function BlogsPage() {
    const [blogs, SetBlogs] = useState([])
    const fetchData= async()=>{
        const result= await GetAllBlogs()
        console.log(result['data'])
        if (result['Status'] === 'success') {
            SetBlogs(result['data'])
        }
        else {  
            SetBlogs([])
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">All Blogs / My Blogs</h3>
            </div>
            <div className="container-flex row mb-5 " style={{ border: "2px solid black"}}>
                <SideNavigation/>
                <div className="container col-8">
                    <table className="table table-striped mt-5" style={{textAlign:"center",border:"1px dashed green"}}>
                        <thead>
                            <th>id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                        {blogs.map(((blog) => {
                                return <BlogList id={blog.blog_id}
                                title={blog.title}
                                content={blog.content}
                                />
                            }))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BlogsPage