import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <li><Link to={"/add"}>Add Employee</Link></li>
        </nav>
    </div>
  )
}
