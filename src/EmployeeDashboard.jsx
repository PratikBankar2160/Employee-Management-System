import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpNavbar from './EmpNavbar';

export default function EmployeeDashboard() {

    let [searchResult, setSearchResult] = useState([]);
    const [searchFirstName, setSearchFirstName] = useState("");
    let [searchLastName, SetSearchLastName] = useState("");
    let [serachDesignation, setSerachDesignation] = useState("");
    let [searchDepartment, setSearchDepartment] = useState("");

    let [Employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/all")
            .then((res) => setEmployee(res.data))
            .catch(() => alert("Error"));
    }, []);

    let searchByFirstName = (e) => {
        axios.get(`http://localhost:8080/findByFirstName/${searchFirstName}`)
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
        axios.get(`http://localhost:8080/findByLastName/${searchLastName}`)
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
        axios.get(`http://localhost:8080/findByDepartment/${searchDepartment}`)
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
        axios.get(`http://localhost:8080/findByDesignation/${serachDesignation}`)
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

            {/* <h1 className='w-100 text-light fs-1 bg-warning text-center' style={{ "height": "100px" }}>Welcome to Employee dashboard</h1> */}
            <EmpNavbar></EmpNavbar>
            <div className="container mt-4">

                {/* 🔍 Search Section */}
                <div className="card shadow-sm p-3 mb-4">
                    <div className="row g-3 align-items-end">

                        <div className="col-md-3">
                            <label className="form-label fw-semibold">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Name"
                                value={searchFirstName}
                                onChange={(e) => setSearchFirstName(e.target.value)}
                            />
                            <button className="btn btn-warning w-100 mt-2" onClick={searchByFirstName}>
                                Search
                            </button>
                        </div>

                        <div className="col-md-3">
                            <label className="form-label fw-semibold">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Surname"
                                value={searchLastName}
                                onChange={(e) => SetSearchLastName(e.target.value)}
                            />
                            <button className="btn btn-warning w-100 mt-2" onClick={searchBySurname}>
                                Search
                            </button>
                        </div>

                        <div className="col-md-3">
                            <label className="form-label fw-semibold">Department</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Department"
                                value={searchDepartment}
                                onChange={(e) => setSearchDepartment(e.target.value)}
                            />
                            <button className="btn btn-warning w-100 mt-2" onClick={searchByDepartment}>
                                Search
                            </button>
                        </div>

                        <div className="col-md-3">
                            <label className="form-label fw-semibold">Designation</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Designation"
                                value={serachDesignation}
                                onChange={(e) => setSerachDesignation(e.target.value)}
                            />
                            <button className="btn btn-warning w-100 mt-2" onClick={searchByDesignation}>
                                Search
                            </button>
                        </div>

                    </div>
                </div>

                {/* 👨‍💼 Employee Cards */}
                <div className="row">
                    {(searchResult.length > 0 ? searchResult : Employee).map((e) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={e.eid}>
                            <div className="card h-100 shadow-sm border-0">

                                <img
                                    src={e.profile}
                                    className="card-img-top"
                                    alt="profile"
                                    style={{ height: "220px", objectFit: "cover" }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">
                                        {e.firstname} {e.lastname}
                                    </h5>

                                    <hr />

                                    <p className="mb-1">
                                        <strong>Department:</strong> {e.department}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Designation:</strong> {e.designation}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Contact:</strong> {e.contactno}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Email:</strong> {e.email}
                                    </p>
                                    <p className="mb-0">
                                        <strong>DOB:</strong> {e.dob}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
