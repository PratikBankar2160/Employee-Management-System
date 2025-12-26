import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./LeaveButtonStatus.css"

export default function EmployeeLeaves() {
    const app = process.env.REACT_APP_API_URL;
    let [Leaves, setLeaves] = useState([]);

    useEffect(() => {
        fetchLeaves("All");
    }, []);

    const fetchLeaves = (action) => {
        let url = `${app}/leave`;

        switch (action) {
            case "All":
                url += "all";
                break;
            case "Pending":
                url += "pendingLeaves";
                break;
            case "Approved":
                url += "approvedLeaves";
                break;
            case "Rejected":
                url += "rejectedLeaves";
                break;
            default:
                return;
        }

        axios.get(url)
            .then(res => setLeaves(Array.isArray(res.data) ? res.data : []))
            .catch(err => {
                setLeaves([]);
            });
    };

    const sortLeave = (action) => {
        fetchLeaves(action);
    };

    const changeStatus = (leaveid, action) => {
        axios.put(`${app}/leave/status/${leaveid}/${action}`)
            .then(() => {
                setLeaves(prev =>
                    prev.map(l =>
                        l.id === leaveid ? { ...l, status: action } : l
                    )
                );
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h3 className="text-center fw-bold mb-4">Leave Requests</h3>

                        <div className="status-buttons">
                            <button className="status-button all" onClick={() => sortLeave("All")}>
                                <i>🔍</i> ALL
                            </button>
                            <button className="status-button pending" onClick={() => sortLeave("Pending")}>
                                <i>⏳</i> PENDING
                            </button>
                            <button className="status-button approved" onClick={() => sortLeave("Approved")}>
                                <i>✅</i> APPROVED
                            </button>
                            <button className="status-button rejected" onClick={() => sortLeave("Rejected")}>
                                <i>❌</i> REJECTED
                            </button>
                        </div>

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
                                                            <button
                                                                className="btn btn-success me-2"
                                                                onClick={() => changeStatus(leave.id, "Approved")}
                                                            >
                                                                Approve
                                                            </button>
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() => changeStatus(leave.id, "Rejected")}
                                                            >
                                                                Reject
                                                            </button>
                                                        </>
                                                    ) : leave.status === "Approved" ? (
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => changeStatus(leave.id, "Rejected")}
                                                        >
                                                            Reject
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn btn-success"
                                                            onClick={() => changeStatus(leave.id, "Approved")}
                                                        >
                                                            Approve
                                                        </button>
                                                    )}

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
