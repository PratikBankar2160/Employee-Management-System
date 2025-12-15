import React from 'react'
import Navbar from './Navbar'

export default function AdminDashboard() {
  return (
    <div>
        <h1 className='w-100 text-light fs-1 bg-success' style={{"height":"80px","textAlign":"center"}}>Welcome to Admin Dashboard</h1>
        <Navbar/>
    </div>
  )
}
