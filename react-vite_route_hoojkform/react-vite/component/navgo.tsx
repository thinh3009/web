import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const NavGo = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => {
    // Giả sử đăng nhập thành công
    setIsLoggedIn(true)
    navigate('/dashboard')
  }
  return (
    <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Login Page</h1>
        <p>{isLoggedIn ? 'You are logged in!' : 'Please log in to continue.'}</p>
        <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
            Log In
        </button>
        </div>
    </>
    
  )
}

export default NavGo