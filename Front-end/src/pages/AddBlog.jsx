
import { toast } from "react-toastify"
import SideNavigation from "../component/Sidenavigation"
import { useEffect, useState } from "react"
import { addBlogs } from "../services/blogs"
import { GetAllCategory } from "../services/category"
import { useNavigate } from "react-router-dom"

function AddBlog() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("0")
    const [catelist, setCatelist] = useState([])
    const navigate = useNavigate()
    const addBlog = async () => {
        if (title.length == 0) {
            toast.warning("Please Enter Blog Title")
        }
        else if (content.length == 0) {
            toast.warning("Please Enter Blog Content")
        }
        else {
            const id = sessionStorage['userid']
            console.log(category)
            const result = await addBlogs(title, content, id, category)
            if (result['Status'] === 'success') {
                if (result['data'].length != 0) {
                    toast.success(`Blog Added`)
                }
                else {
                    toast.warning(`Blog not Added`)
                }
            }
            else {
                toast.warning(`Blog not Added`)
            }
        }
    }

    useEffect(() => {
        (async () => {
            const cates = await GetAllCategory()
            if (cates.data.length == 0) {
                toast.warning("No Categories are Present in the Database,Please Add A Category")
                navigate('/addCat')
            }
            else {
                setCatelist(cates.data)
                setCategory(cates.data[0].category_id)
            }

        })
            ();
    }, []);

    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
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
                        <div className="col-8"><input type="text" className="col form-control" onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Title" /></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">Contents</div>
                        <div className="col-8">
                            <textarea rows="10" style={{ width: "100%" }} onChange={(e) => { setContent(e.target.value) }} placeholder="Enter Contents"></textarea>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">Category</div>
                        <div className="col-8">
                            <select style={{ width: "100%" }} onChange={(e) => { setCategory(e.target.value) }}>
                                {catelist.length != 0 && catelist.map((cate) => {
                                    return <option value={cate.category_id}>{cate.title}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6"><button className="btn btn-primary col-4" onClick={addBlog}>Create</button></div>
                        <div className="col-6"><button className="btn btn-success col-4">Cancel</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlog