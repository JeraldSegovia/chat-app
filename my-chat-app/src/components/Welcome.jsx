import React from 'react'
import loader from "../assets/loader.gif";
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
const Welcome = () => {
  const token = Cookies.get('authToken');
  const userData = jwtDecode(token);
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-full h-full">
            <img src={loader} alt="loader" className="h-36" />
            <div>
            <h3 className="text-white text-2xl">Hi! <span className='text-white'>{userData.username}</span></h3>
            <span className="text-white text-2xl text-center">Lets Chat? :)</span>
            </div>
    </div>
  )
}

export default Welcome