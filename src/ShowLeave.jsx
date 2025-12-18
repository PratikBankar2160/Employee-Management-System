import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import EmpNavbar from './EmpNavbar';

export default function ShowLeave() {



    let [Data, setData] = useState([]);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userInfo"));
        axios.get(`http://localhost:8080/leave/employee/${user.eid}`)
            .then((res) => {
                setData(res.data);

            })
            .catch((err) => {
                alert("Something wrong")
            })
    })
    return (
        <div>
            <EmpNavbar></EmpNavbar>
            <div className="container mt-4">
                <h3 className="mb-3">Leave Applications</h3>

                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>EID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Reason</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.length > 0 ? (
                            Data.map((leave, index) => (
                                <tr key={index}>
                                    <td>{leave.eid}</td>
                                    <td>{leave.firstname}</td>
                                    <td>{leave.lastname}</td>
                                    <td>{leave.reason}</td>
                                    <td>{leave.fromdate}</td>
                                    <td>{leave.todate}</td>
                                    <td>
                                        <span className={
                                            leave.status === "Approved"
                                                ? "badge bg-success"
                                                : leave.status === "Rejected"
                                                    ? "badge bg-danger"
                                                    : "badge bg-warning text-dark"
                                        }>
                                            {leave.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    No leave records found
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
