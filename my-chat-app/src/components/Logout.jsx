import Cookies from 'js-cookie';
import React from 'react'
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Logout = () => {
  //A simple Log Out not yet able to log out on BackEnd server Params
  const Navigate = useNavigate();
        const handleLogOut = async () => {
          localStorage.clear();
          Cookies.remove('authToken');
          Navigate('/login');
        }
  return (
    <div>
      <button className='rounded-md bg-green-900 text-green-100 p-2 hover:bg-green-300 hover:text-green-950' onClick={handleLogOut} >
      <ExitToAppIcon />
      </button>
    </div>
  )
}

export default Logout