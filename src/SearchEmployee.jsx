import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SearchEmployee() {

    let navigate = useNavigate();

    const [Employee, setEmployee] = useState([]);

    let [name, setName] = useState("");

    let HandelChange = (e) => {
        setName(e.target.value)
    };

    let Fetch = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8080/findByFirstName/${name}`)
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((err) => {
                alert("Error in get")
            })
    }

    let Delete1 = (id) => {
        axios.delete(`http://localhost:8080/deleteById/${id}`)
            .then(() => {
                alert("Deleted Successfully");
                setEmployee(Employee.filter((emp) => emp.eid !== id));
            })
            .catch((err) => {
                alert("Something went wrong");
            });
    };

    return (
        <div>
            <div>
                <h1>Search Employee</h1>
                <form onSubmit={Fetch}>
                    <label htmlFor="name">Enter Employee Name</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name='name' id='name' placeholder='Enter employee name' onChange={HandelChange} />
                    <br />
                    <button>Fetch</button>
                </form>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        {Employee.map((e) => (
                            <div className="col-md-3" key={e.eid}>
                                <div className="card mt-4">
                                    <img src={e.profile} className="card-img-top" alt="profile" />


                                    <div className="card-body">
                                        <p className="card-text">Employee Details</p>
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
            </div>
        </div>
    )
}
