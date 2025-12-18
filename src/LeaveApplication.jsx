import React, { useState, useEffect } from "react";
import axios from "axios";
import EmpNavbar from "./EmpNavbar";
import { useNavigate } from "react-router-dom";

export default function LeaveApplication() {

    let navigate = useNavigate();

    let [data, setData] = useState({
        eid: 0,
        firstname: "",
        lastname: "",
        reason: "",
        fromdate: "",
        todate: ""
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    };

    let ApplyLeave = ((e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/leave/apply", data)
            .then((res) => {
                alert("Leave added successfully.!")
                navigate("/seeLeave")
                e.target.reset();
            })
            .catch((err) => {
                alert("Something worng.")
            })
    })



    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userInfo"));
        if (user) {
            setData((prev) => ({
                ...prev,
                eid: user.eid,
                firstname: user.firstname,
                lastname: user.lastname
            }));

        }
    }, [])

    return (
        <div>
            <EmpNavbar></EmpNavbar>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">

                        <div class="card shadow">
                            <div class="card-header bg-primary text-white text-center">
                                <h4>Leave Application Form</h4>
                            </div>

                            <div class="card-body">
                                <form onSubmit={ApplyLeave}>

                                    <div class="mb-3">
                                        <label class="form-label">Employee ID</label>
                                        <input type="number" name="eid" value={data.eid} class="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">First Name</label>
                                        <input type="text" name="firstname" value={data.firstname} class="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" name="lastname" value={data.lastname} class="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Reason for Leave</label>
                                        <textarea name="reason" class="form-control" rows="3" required onChange={handleChange}></textarea>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">From Date</label>
                                        <input type="date" name="fromdate" class="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">To Date</label>
                                        <input type="date" name="todate" class="form-control" required onChange={handleChange}></input>
                                    </div>

                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-success">
                                            Apply Leave
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
