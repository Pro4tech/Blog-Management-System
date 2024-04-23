
import { useState } from "react"
import BlogList from "../component/BlogList"
import SideNavigation from "../component/Sidenavigation"
import { GetSpecficBlog } from "../services/blogs"
import { toast } from "react-toastify"

function SearchBlog() {
    const [blogs, SetBlogs] = useState([])
    const [search, SetSearch] = useState("")

    const Search = async () => {
        const result = await GetSpecficBlog(search)
        console.log(result['data'])
        if (result['Status'] === 'success') {
            SetBlogs(result['data'])
            if (result['data'].length != 0) {
                toast.success(`Blogs Found`)
            }
            else {
                toast.warning(`No Such Blog Found`)
            }
        }
    }
    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">Search Blog</h3>
            </div>
            <div className="container-flex row mb-5 " style={{ border: "2px solid black" }}>
                <SideNavigation />
                <div className="container col-8">
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Blog Title</label>
                        <input className="col form-control me-3" onChange={(e) => { SetSearch(e.target.value) }} />
                        <button className="col-1 btn btn-success me-5" onClick={Search}>Search</button>
                    </div>
                    <table className="table table-striped mt-5" style={{ textAlign: "center", border: "1px dashed green" }}>
                        <thead>
                            <th>id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {blogs.filter((blog) => {
                                return blog.title === search
                            })
                                .map((blog) => {
                                    return <BlogList id={blog.blog_id}
                                        title={blog.title}
                                        content={blog.content} />
                                })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchBlog