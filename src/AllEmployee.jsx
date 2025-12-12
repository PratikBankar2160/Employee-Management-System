import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AllEmployee() {

    let navigate = useNavigate();
    let [Employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/all")
            .then((res) => setEmployee(res.data))
            .catch(() => alert("Error"));
    }, []);

    let Delete1 = (id) => {
        axios.delete(`http://localhost:8080/deleteById/${id}`)
            .then(() => {
                alert("Deleted Successfully");
                setEmployee(Employee.filter((emp) => emp.eid !== id));
            })
            .catch((err) => {
                alert("Something went wrong");
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="row">
                {Employee.map((e) => (
                    <div className="col-md-3" key={e.eid}>
                        <div className="card mt-4">
                            <img src={e.profile} className="card-img-top" alt="profile" />

                            <div className="card-body">
                                <h5 className="card-title">{e.firstname}</h5>

                                <div className="card-text">
                                    <p>Department: <strong>{e.department}</strong></p>
                                    <p>Designation: <strong>{e.designation}</strong></p>
                                    <p>Contact No.: <strong>{e.contactno}</strong></p>
                                    <p>Email: <strong>{e.email}</strong></p>
                                    <p>DOB: <strong>{e.dob}</strong></p>
                                </div>

                                <button className="btn btn-danger me-2" onClick={() => Delete1(e.eid)}>
                                    Delete
                                </button>

                                <button className="btn btn-primary" onClick={() => navigate(`/update/${e.eid}`)}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
