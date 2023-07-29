import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const usenavigate=useNavigate()
    useEffect(()=>{
        let username=sessionStorage.getItem('username')
        if(username===''||username===null){
            usenavigate('/login')
        }

    })
  return (
    <div>
        <div className='header'>
        <Link to={'/'}>Home</Link>
        <Link style={{float:'right'}} to={'/login'}>Logout</Link>
        </div>
        <div className='text-center'> HomePage</div>
    </div>
  )
}

export default Home