
import { useEffect, useState } from "react"
import SideNavigation from "../component/Sidenavigation"
import { EditSpecficBlogId, GetSpecficBlogId } from "../services/blogs"
import { toast } from "react-toastify"
import { GetAllCategory } from "../services/category"
import CategoryOption from "../component/CategoryOptions"
import { useNavigate } from "react-router-dom"

function EditBlog() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [catelist, setCatelist] = useState([])
    const navigate=useNavigate()
    const fetchData = async () => {
        const id = sessionStorage['Blog_id']
        const result = await GetSpecficBlogId(id)
        if (result['Status'] === 'success') {
            if (result['data'].length != 0) {
                const data = result['data'][0]
                console.log(data)
                toast.success(`Blogs Found`)
                return data
            }
            else {
                toast.warning(`No Such Blog Found`)
            }
        }
    }

    const editBlog = async () => {
        const id = sessionStorage['Blog_id']
        const result = await EditSpecficBlogId(id, title, content, category)
        if (result['Status'] === 'success') {
            if (result['data'].length != 0) {
                toast.success(`Blog Edited`)

            sessionStorage.removeItem('Blog_id')
            navigate('/home')
            }
            else {
                toast.warning(`Blog not Editted`)
            }
        }
        else {
            toast.warning(`Blog not Editted`)
        }
    }

    useEffect(() => {
        (async () => {
            const blog = await fetchData()
            console.log(blog)
            const { title, content, category_id } = blog
            setTitle(title)
            setContent(content)
            setCategory(category_id)
            const cates = await GetAllCategory()
            setCatelist(cates.data)
        })
            ();
    }, []);

    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
            <button className="btn btn-success" onClick={fetchData}>Sync Data</button>
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">Edit/Create Blog</h3>
            </div>
            <div className="container-flex row mb-5 " style={{ border: "2px solid black" }}>
                <SideNavigation />
                <div className="container col-8">
                    <div className="row mt-5">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">Title:</div>
                        <div className="col-8"><input type="text" value={title} className="col form-control" onChange={(e) => { setTitle(e.target.value) }} /></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">Contents</div>
                        <div className="col-8">
                            <textarea value={content} rows="10" style={{ width: "100%" }} onChange={(e) => { setContent(e.target.value) }}></textarea>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">Category</div>
                        <div className="col-8">
                            <select style={{ width: "100%" }} value={category} onChange={(e) => { setCategory(e.target.value) }}>

                                {catelist.length != 0 && catelist.map((cate) => {
                                    return <option value={cate.category_id}>{cate.title}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6"><button className="btn btn-primary col-3" onClick={editBlog}>Edit</button></div>
                        <div className="col-6"><button className="btn btn-success col-3">Cancel</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBlog