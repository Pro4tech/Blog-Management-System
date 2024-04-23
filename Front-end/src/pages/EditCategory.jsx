
import { useEffect, useState } from "react"
import SideNavigation from "../component/Sidenavigation"

function EditCategory() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    useEffect(() => {
        //API invoking to Get Blog List
        const cats = { id: 2, title: "Testing", description: "Testing is Fun....." }
        ////
        const category_ids = sessionStorage['category_id']
        console.log(cats.id)
        console.log(category_ids)

        if (category_ids == cats.id) {
            const { title, description } = cats
            setTitle(title)
            setDescription(description)
        }
    }, [])


    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">Edit/Create Category</h3>
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
                        <div className="col-3">Description</div>
                        <div className="col-8">
                            <input type="text" value={description} className="col form-control" onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6"><button className="btn btn-primary col-3">Edit</button></div>
                        <div className="col-6"><button className="btn btn-success col-3">Cancel</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory