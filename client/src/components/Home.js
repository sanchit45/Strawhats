import React, { useContext } from 'react'
import { Context } from '..';
import { Navigate } from 'react-router-dom';
import Logout from './Logout';

const Home = () => {
  const { isauthenticated, setisauthenticated,user } = useContext(Context);
  console.log(isauthenticated);
  console.log(user)
  if(!isauthenticated){
    return (<Navigate to="/login"/>)
  }
  return (
    <div>
      HELLO BABU
      <Logout/>
    </div>
  )
}

export default Home
