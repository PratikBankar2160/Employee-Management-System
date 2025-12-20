import React from 'react'
import { useParams } from 'react-router-dom'
import EmpNavbar from './EmpNavbar';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UpdateLeaveApplication() {
    let { id } = useParams();
    let navigate = useNavigate();
    let [data, setData] = useState([]);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userInfo"))
                if (user) {
                    setData((prev) => ({
                        ...prev,
                        eid: user.eid,
                        firstname: user.firstname,
                        lastname: user.lastname
                    }));
                }
    },[])

    let handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    let UpdateLeave = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/leave/update/${id}`,data)
            .then((res) => {
                alert("Leave update successfully.!")
                navigate("/seeLeave")
            })
            .catch((err) => {
                alert("Something wrong.")
            })
    }
    

    return (
        <div>
            <EmpNavbar></EmpNavbar>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <div className="card shadow">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Update Leave Application Form</h4>
                            </div>

                            <div className="card-body">
                                <form onSubmit={UpdateLeave}>

                                    <div className="mb-3">
                                        <label className="form-label">Employee ID</label>
                                        <input type="number" name="eid" value={data.eid} className="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input type="text" name="firstname" value={data.firstname} className="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" name="lastname" value={data.lastname} className="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Reason for Leave</label>
                                        <textarea name="reason"  className="form-control" rows="3" required onChange={handleChange}></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">From Date</label>
                                        <input type="date" name="fromdate" className="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">To Date</label>
                                        <input type="date" name="todate" className="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-success">
                                            Update Leave
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
