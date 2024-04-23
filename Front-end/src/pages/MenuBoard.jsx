
import SideNavigation from "../component/Sidenavigation"

function MenuBoard() {
    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">Blogging App</h3>
            </div>
            <div className="container-flex mb-5 " style={{ border: "2px solid black"}}>
                <SideNavigation/>
                <div className="col-8"></div>
            </div>
        </div>
    )
}

export default MenuBoard