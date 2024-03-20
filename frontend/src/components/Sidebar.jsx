import React from 'react'
import { Link } from "react-router-dom"
import Logout from "./Logout"
import { useAuthContext } from "../context/AuthContext"

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <aside>
    <nav>
      <Link to='/' className='flex justify-center'>
          {/* // ... we'll place the GitHub icon here, later */}
          Github
      </Link>
      <Link to='/'>
          {/* // ... we'll place a "home" icon here, later */}
          Home
      </Link>
      {authUser && (
        <Link to='/likes'>
          {/* // we'll place a "heart" icon here, later */}
          Likes
        </Link>
      )}
      
      {!authUser && (
        <Link to='/login'>
          {/* // we'll place a "login" icon here, later	 */}
          Login
        </Link>
      )}

      {!authUser && (
        <Link to='/signup'>
          {/* // we'll place a "signup" icon here, later */}
          Signup
        </Link>
      )}

      {authUser && (
        <div>
          <Logout />
        </div>
      )}
    </nav>
  </aside>
  )
}

export default Sidebar
