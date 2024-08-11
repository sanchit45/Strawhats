import axios from 'axios';
import React, { useContext } from 'react'
import { Context } from '..';
import toast from "react-hot-toast"
const Logout = () => {
    const { isauthenticated, setisauthenticated, loading, setloading } = useContext(Context);
    const submithandler = async (e) => {
        try {
            const data = await axios.get(`http://localhost:5000/api/auth/logout`, {
                withCredentials: true,
            })
            // console.log(data)
            toast.success("user loged out")
            setisauthenticated(false);
            setloading(false)
        } catch (error) {
            setisauthenticated(true);
            console.log(error);
            setloading(false);
            toast.error("Server down :(")
        }
    }
    return (
        <div>
            <button onClick={submithandler} className="bg-[blue] text-2xl w-[7rem] text-white h-[3rem]">LOGOUT</button>
        </div>
    )
}

export default Logout
