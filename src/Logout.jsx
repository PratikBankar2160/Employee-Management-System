import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Logout.css"

export default function Logout() {
    let navigate = useNavigate();
    return (
        <div>
            <button
                className="btn btn-danger px-4 py-2 fw-semibold"
                onClick={() => navigate("/register")}
            >
                Logout
            </button>
        </div>
    )
}
