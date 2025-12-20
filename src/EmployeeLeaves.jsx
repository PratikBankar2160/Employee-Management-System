import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function EmployeeLeaves() {
    let [Leaves, setLeaves] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/leave/all")
            .then((res) => {
                setLeaves(res.data);
            })
            .catch((err) => {
                alert("Error while fetching leaves.")
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="card-body">

                        <h3 className="text-center fw-bold mb-4">Leave Requests</h3>

                        <div className="table-responsive">
                            <table className="table table-bordered table-hover text-center align-middle">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Emp ID</th>
                                        <th>Leave ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Reason</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Leaves.length > 0 ? (
                                        Leaves.map((leave) => (
                                            <tr key={leave.id}>
                                                <td>{leave.eid}</td>
                                                <td>{leave.id}</td>
                                                <td>{leave.firstname}</td>
                                                <td>{leave.lastname}</td>
                                                <td className="text-start">{leave.reason}</td>
                                                <td>{leave.fromdate}</td>
                                                <td>{leave.todate}</td>

                                                <td>
                                                    <span
                                                        className={`badge px-3 py-2 ${leave.status === "Approved"
                                                            ? "bg-success"
                                                            : leave.status === "Rejected"
                                                                ? "bg-danger"
                                                                : "bg-warning text-dark"
                                                            }`}
                                                    >
                                                        {leave.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    {leave.status === "Pending" ? (
                                                        <>
                                                            <button className="btn btn-success me-2">Approve</button>
                                                            <button className="btn btn-danger">Reject</button>
                                                        </>
                                                    ) : leave.status === "Approved" ? (
                                                        <button className="btn btn-danger">Reject</button>
                                                    ) :
                                                        <button className="btn btn-success">Approve</button>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="9" className="fw-semibold">
                                                No leave records found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
