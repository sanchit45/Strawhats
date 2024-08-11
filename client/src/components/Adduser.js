import React, { useContext, useState } from 'react'
import { Context } from '..';
import axios from 'axios';
import toast from 'react-hot-toast';

const Adduser = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const { isauthenticated, setisauthenticated, setloading, loading } = useContext(Context);

    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/adduser", {
                name, email, password
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            // console.log(data);
            toast.success(`New user added successfully :)`);
        }
        catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }

    }
    if (!isauthenticated) {
        return <div className="text-2xl w-[80%] my-[10rem]">Access to this page is denied.Please contact the admin</div>
    }
    return (
        <div className="form p-[4rem] w-[60%] mx-auto">
            <form onSubmit={submithandler}>
                <div className="sub">
                    <p className='font-bold my-[0.5rem]'>NAME</p>
                    <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                </div>
                <div className="sub">
                    <p className='font-bold my-[0.5rem]'>EMAIL ID</p>
                    <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="email" placeholder='email id' value={email} onChange={(e) => { setemail(e.target.value) }} />
                </div>
                <div className="sub relative">
                    <p className='font-bold my-[0.5rem]'>PASSWORD</p>
                    <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                </div>
                <button className='bg-[blue] text-white font-bold w-[100%] h-[2rem] rounded-lg my-[2rem] text-[1.3rem]' >Add User</button>
            </form>
        </div>
    )
}

export default Adduser
