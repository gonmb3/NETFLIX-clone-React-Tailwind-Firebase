import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useNetflixContext } from '../context/netflixProvider'


const Navbar = () => {

  const {user, logOut} = useNetflixContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
        console.log(error)
    }
  } 



  return (
    <nav className='flex justify-between items-center p-4 z-[100] absolute w-full'>
        <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
       {
        user?.email ? (
          <div className="">
          <Link to="/account">
             <button className=' text-white px-6 py-2 rounded cursor-pointer'>Account</button>
          </Link>
          <Link to="/signup">
          <button
          onClick={handleLogout}
           className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'
           >Logout
           </button>
          </Link>          
        </div>
        ) : (
          <div className="">
          <Link to="/login">
             <button className=' text-white px-6 py-2 rounded cursor-pointer'>Sign In</button>
          </Link>
          <Link to="/signup">
          <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>          
        </div>
        )
       }
    </nav>
  )
}

export default Navbar