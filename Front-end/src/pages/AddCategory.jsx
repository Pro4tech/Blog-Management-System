
import { useEffect, useState } from "react"
import SideNavigation from "../component/Sidenavigation"
import CategoryList from "../component/CategoryList"
import { AddCategories, GetAllCategory } from "../services/category"
import { toast } from "react-toastify"

function AddCategory() {
    const [Categories, setCategories] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        (async () => {
            const catelist = await GetAllCategory()
            console.log(catelist.data)
            setCategories(catelist.data)
        })
        ();
    }, []);

    const addCategory= async()=>{
        // const categ=[{id:3,title:title,description:description}]
        const categ= await AddCategories(title,description)
        if (categ['Status'] === 'success') {
            if (categ['data'].length != 0) {
                const data = await GetAllCategory()
                console.log(data.data)
                setCategories(data.data)
                toast.success(`Category Added`)
            }
            else {
                toast.warning(`Error while adding Category`)
            }
        }
    }
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
                    <div className="row mt-5 mb-5">
                        <div className="col-3">Category Title:</div>
                        <div className="col-8"><input type="text" className="col form-control" onChange={(e)=>{setTitle(e.target.value)}}/></div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-3">Description:</div>
                        <div className="col-8"><input type="text" className="col form-control" onChange={(e)=>{setDescription(e.target.value)}}/></div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="btn btn-success" 
                        onClick={addCategory}
                        >Add Category</button></div>
                        <div className="col-4"></div>
                    </div>
                    <table className="table table-striped mt-5" style={{ textAlign: "center", border: "1px dashed green" }}>
                        <thead>
                            <th>id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {Categories.map((category) => {
                                return <CategoryList id={category['category_id']}
                                title={category.title}
                                description={category.description}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AddCategory