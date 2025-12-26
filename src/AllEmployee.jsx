import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

export default function AllEmployee() {
    const app = process.env.REACT_APP_API_URL;

    let [searchResult, setSearchResult] = useState([]);
    const [searchFirstName, setSearchFirstName] = useState("");
    let [searchLastName, SetSearchLastName] = useState("");
    let [serachDesignation, setSerachDesignation] = useState("");
    let [searchDepartment, setSearchDepartment] = useState("");

    let navigate = useNavigate();
    let [Employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get(`${app}/all`)
            .then((res) => setEmployee(res.data))
            .catch(() => alert("Error"));
    }, []);

    let Delete1 = (id) => {
        axios.delete(`${app}/deleteById/${id}`)
            .then(() => {
                alert("Deleted Successfully");
                setEmployee(Employee.filter((emp) => emp.eid !== id));
            })
            .catch((err) => {
                alert("Something went wrong");
                console.log(err);
            });
    };

    let searchByFirstName = (e) => {
        axios.get(`${app}/findByFirstName/${searchFirstName}`)
            .then((res) => {
                setSearchResult(res.data)
                console.log(res.data);
                setSearchFirstName("");

            })
            .catch((err) => {
                alert("error")
            })
    }
    let searchBySurname = (e) => {
        axios.get(`${app}/findByLastName/${searchLastName}`)
            .then((res) => {
                setSearchResult(res.data)
                console.log(res.data);
                SetSearchLastName("");
            })
            .catch((err) => {
                alert("error")
            })
    }
    let searchByDepartment = (e) => {
        axios.get(`${app}/findByDepartment/${searchDepartment}`)
            .then((res) => {
                setSearchResult(res.data)
                console.log(res.data);
                setSearchDepartment("");
            })
            .catch((err) => {
                alert("error")
            })
    }
    let searchByDesignation = (e) => {
        axios.get(`${app}/findByDesignation/${serachDesignation}`)
            .then((res) => {
                setSearchResult(res.data)
                console.log(res.data);
                setSerachDesignation("");
            })
            .catch((err) => {
                alert("error")
            })
    }

    return (
        <div>
            <AdminDashboard />
            <div className="container">


                <div className="row">
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search by Name"
                            value={searchFirstName}
                            onChange={(e) => setSearchFirstName(e.target.value)}
                        />
                        <button className='btn btn-warning' onClick={searchByFirstName}>Search</button>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search by Surname"
                            value={searchLastName}
                            onChange={(e) => SetSearchLastName(e.target.value)}
                        />
                        <button className='btn btn-warning' onClick={searchBySurname}>Search</button>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search by Department"
                            value={searchDepartment}
                            onChange={(e) => setSearchDepartment(e.target.value)}
                        />
                        <button className='btn btn-warning' onClick={searchByDepartment}>Search</button>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search by Designation"
                            value={serachDesignation}
                            onChange={(e) => setSerachDesignation(e.target.value)}
                        />
                        <button className='btn btn-warning' onClick={searchByDesignation}>Search</button>
                    </div>
                </div>

                <div className="row">
                    {(searchResult.length > 0 ? searchResult : Employee).map((e) => (
                        <div className="col-md-3" key={e.eid}>
                            <div className="card mt-4">
                                <img src={e.profile} className="card-img-top" alt="profile" />

                                <div className="card-body">
                                    <h5 className="card-title">{e.firstname}  {e.lastname}</h5>

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
    );
}
