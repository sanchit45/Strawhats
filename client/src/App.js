import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import { Context } from '.';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
function App() {
  const { setuser, setisauthenticated, loading, setloading } = useContext(Context);
  useEffect(() => {
    setloading(true);
    const getdata = async () => {
      try {
        const data = await axios.get(`http://localhost:5000/api/auth/user`, {
          withCredentials: true,
        })
        setuser(data.data.user);
        setisauthenticated(true);
      } catch (error) {
        setisauthenticated(false);
        setuser({});
        console.log(error)
      }
    }
    // .then((res => {
    //   console.log(data);
    //   // console.log(res.data.user)
    //   // setloading(false);
    // })).catch(err => {
    //   // setloading(false)
    //   // console.log(err)
    // })
    getdata();
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      <Toaster></Toaster>
    </Router>
  );
}

export default App;
