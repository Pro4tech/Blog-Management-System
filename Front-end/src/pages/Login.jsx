import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { LoginUser} from "../services/user"
function Login() {

    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const onSignUp= ()=>{
        navigate('/register')
    }
    const onSignIn= async()=>{
        if (email.length === 0) {
            toast.warning("Enter Email")
        }
        else if (password.length === 0) {
            toast.warning("Enter Password")
        }
        else {
            const result = await LoginUser(email, password)
            if (result['Status'] === 'success') {
                toast.success('Successfully User Authenticated')
                console.log(result['data'])
                sessionStorage.setItem("userid", result['data'].id)
                sessionStorage.setItem("userName", result['data'].name)
                navigate('/home')
            }
            else {  
                toast.error(`Invalid Credentials Entered,Try Again`)
            }
        }
    }
    return (
        <div className="Login mt-5 mt-5 ms-5 me-5" >
            <div className="container-flex mb-3 mt-3" style={{ border: "2px solid black" }}>
                <h3 className="mt-2 mb -2 ">Login</h3>
            </div>
            <div className="container mt-5 mb-5 " >
                <div className="col-4"></div>
                <div className="col-5 container" style={{ border: "2px solid black", padding: "" }}>
                    <div className="row mt-5 mb-5 me-3">
                        <div className="col">Email</div>
                        <div className="col"><input type="text" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/></div>
                    </div>
                    <div className="row mt-5 mb-5 me-3">
                        <div className="col">Password</div>
                        <div className="col"><input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                    </div>
                    <div className=" container row mt-5 mb-5">
                        <div className="col-3"></div>
                        <button className=" col-3 btn btn-success me-3" onClick={onSignIn}>Sign in</button>
                        <button className=" col-3 btn btn-warning" onClick={onSignUp}>Sign Up</button>
                        <div className="col-3"></div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}
export default Login