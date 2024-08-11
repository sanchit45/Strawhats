import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getreports = () => {
    const [reports, setreports] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/auth/getreports`, {
            withCredentials: true,
        }).then((res) => {

            setreports(res.data)
            console.log(reports)
        }).catch((err) => {
            console.log(err);
        })

    }, [])
    return (
        <div>
            {
                reports?.map((e) => (
                    <div>{e.age}</div>
                ))
            }
        </div>
    )
}

export default Getreports
