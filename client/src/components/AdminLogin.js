import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { Context } from '..'
import toast from 'react-hot-toast'
import Adduser from './Adduser'
// import Marquee from "react-fast-marquee";
const AdminLogin = () => {
    const [email, setemail] = useState()
    const [adminkey, setadminkey] = useState()
    const { isauthenticated, setisauthenticated, setloading, loading } = useContext(Context);

    const submithandler = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post("http://localhost:5000/api/auth/adminlogin", {
                email, adminkey
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            toast.success("Admin Loggedin successfully :)")
            setisauthenticated(true);
            // console.log(data);
        } catch (error) {
            console.log(error.response.data.message);
            setisauthenticated(false);
            toast.error(error.response.data.message);
        }
    }
    if (isauthenticated) {
        return <Adduser />
    }
    return (
        <>
            <div className="main flex w-[70%] h-[90vh] my-[2rem] mx-auto bg-[#E1E5E7]">
                <div className="imgsection relative w-[30%]">
                    <h1 className='absolute text-2xl text-white font-bold top-[1rem] left-[1rem]'>Sentinel</h1>
                    <img className='h-full w-full' src="https://img.freepik.com/free-photo/front-view-female-doctor-with-medical-mask-hairnet-posing-with-arms-crossed_23-2148847634.jpg?ga=GA1.1.320508142.1722584958&semt=ais_hybrid" alt="" />
                    <h1 className='absolute bottom-[1rem] w-[70%] left-[4rem] font-serif text-[1.1rem] font-bold'>Empowering Healthcare Thorugh Ai-Driven Adverse Event Detection</h1>

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
                                <p className='font-bold my-[0.5rem]'>ADMIN KEY</p>
                                <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="text" placeholder='admin key' value={adminkey} onChange={(e) => { setadminkey(e.target.value) }} />
                            </div>
                            <button className='bg-[#0184BC] text-white mt-[2rem] w-full h-[2rem] rounded-lg text-[1rem]' >Login</button>
                            <p className='my-[1rem]'>Not an admin ? Login as<Link className='mx-[0.4rem] font-bold text-[grey]' to="/login">Hospital Personnel</Link> </p>
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

export default AdminLogin
