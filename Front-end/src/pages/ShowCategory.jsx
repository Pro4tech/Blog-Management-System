
import { useEffect, useState} from "react"
import SideNavigation from "../component/Sidenavigation"
import CategoryList from "../component/CategoryList"
import { GetAllCategory } from "../services/category";

function ShowCategories() {
    const [Categories, setCategories] = useState([])
    
    useEffect(() => {
        (async () => {
            const catelist = await GetAllCategory()
            console.log(catelist.data)
            setCategories(catelist.data)
        })
        ();
    }, []);

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

export default ShowCategories