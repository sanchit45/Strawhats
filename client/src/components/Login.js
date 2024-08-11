import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { Context } from '..'
import toast from "react-hot-toast"
import Logout from './Logout'
// import Marquee from "react-fast-marquee";
const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const { isauthenticated, setisauthenticated,setloading,loading } = useContext(Context);

    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login", {
                email, password
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            // console.log(data);
            // toast.success(`Welcome back , ${data.data.name}`);
            setisauthenticated(true)
        }
        catch (error) {
            setisauthenticated(false)
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
        }
        
    }
    if (isauthenticated) {
        return <Navigate to={"/"} />
    }
    return (
        <>
            <div className="main flex w-[80%] h-[90vh] my-[2rem] mx-auto bg-[#E1E5E7]">
                <div className="imgsection w-[50%]">
                    <img className='h-full' src="https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.320508142.1722584958&semt=ais_hybrid" alt="" />
                </div>
                <div className="formsection flex flex-col w-[70%] p-[4rem]">
                    <div className="heading bg-red">
                        <h1 className='text-3xl font-bold '>Revolutionalise Patient Safety with AI-Powered Conversation Analysis</h1>
                        <h6 className='text-2xl'>Detect and prevent diverse events before they occur using advanced AI for analysis</h6>
                    </div>
                    <div className="form p-[4rem]">
                        <form onSubmit={submithandler}>
                            <div className="sub">
                                <p className='font-bold my-[0.5rem]'>EMAIL ID</p>
                                <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="email" placeholder='email id' value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </div>
                            <div className="sub relative">
                                <p className='font-bold my-[0.5rem]'>PASSWORD</p>
                                <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            </div>
                            <p className='my-[1rem]'>Are you an admin ? <Link className='mx-[0.4rem] font-bold text-[grey]' to="/adminlogin">Get Access</Link> </p>
                            <button className='bg-[grey] text-white font-bold w-[7rem] h-[3rem] rounded-lg text-[1.3rem]' >Login</button>
                        </form>
                    </div>
                    {/* <Marquee >
                        I can be a React component, multiple React components, or just some text.
                    </Marquee> */}
                </div>

            </div>
        </>
    )
}

export default Login
