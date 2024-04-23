import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { RegisterUser } from "../services/user"
function Register() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [fullname,setFullName]=useState("")
    const [phoneNo,setPhoneNo]=useState("")
    const navigate=useNavigate()
    const OnRegister = async () => {
        if (fullname.length === 0) {
            toast.warning("Enter First Name")
        }
        else if (phoneNo.length === 0) {
            toast.warning("Enter Phone Number")
        }
        else if (email.length === 0) {
            toast.warning("Enter Email")
        }
        else if (password.length === 0) {
            toast.warning("Enter Password")
        }
        else {
            const result = await RegisterUser(email, password, fullname, phoneNo)
            if (result['Status'] === 'success') {
                toast.success('Successfully User Registered')
                navigate('/login')
            }
            else {
                toast.error(`Faced Some Server Issue,Try Again Later`)
            }
        }
    }
    return (
        <div className="Register mt-5 ms-5 me-5">
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">Register</h3>
            </div>
            <div className="container mt-5 mb-5 ">
                <div className="col-4"></div>
                <div className="col-5 container" style={{ border: "2px solid black",}}>
                    <div className="row mt-5 mb-5 me-3">
                        <div className="col">Email</div>
                        <div className="col"><input type="text" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/></div>
                    </div>
                    <div className="row mt-5 mb-5 me-3">
                        <div className="col">Password</div>
                        <div className="col"><input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                    </div>
                    <div className="row mt-5 mb-5 me-3">
                        <div className="col">Full Name</div>
                        <div className="col"><input type="text" className="form-control" onChange={(e)=>{setFullName(e.target.value)}}/></div>
                    </div>
                    <div className="row mt-5 mb-5 me-3">
                        <div className="col">Phone Number</div>
                        <div className="col"><input type="text" className="form-control" onChange={(e)=>{setPhoneNo(e.target.value)}}/></div>
                    </div>
                    <div className=" container row mt-5 mb-5">
                        <div className="col-4"></div>
                        <button className=" col-4 btn btn-success me-3" onClick={OnRegister}>Sign Up</button>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}
export default Register