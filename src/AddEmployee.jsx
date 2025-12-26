import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import AdminDashboard from './AdminDashboard';

export default function AddEmployee() {

    const app = process.env.REACT_APP_API_URL;

    const [employee, setEmployee] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactno: "",
        gender: "",
        dob: "",
        adharno: "",
        panno: "",
        joiningdate: "",
        department: "",
        designation: "",
        reportingmanager: "",
        salary: "",
        exp: "",
        address: "",
        status: "",
        profile: ""
    });

    const handleProfile = (e) => {
        let file = e.target.files[0];
        if (!file) return;

        let fullPath = `./img/${file.name}`;

        setEmployee({
            ...employee,
            profile: fullPath
        });
    };


    const handleChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        });
    };

    const save = (e) => {
        e.preventDefault();

        axios.post(`${app}/add`, employee)
            .then((res) => {
                alert("Success");
            })
            .catch((err) => {
                console.log(err);
                alert("Error");
            });
    };

    return (
        <div>
            <AdminDashboard/>
            <div className="container">
                <div className="card form-card shadow-sm">
                    <div className="card-body">
                        <h4 className="card-title mb-3">Employee Details</h4>

                        <form onSubmit={save} >
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstname" className="form-label required">First name</label>
                                    <input id="firstname" name="firstname" type="text" className="form-control" required minLength="2" onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="lastname" className="form-label required">Last name</label>
                                    <input id="lastname" name="lastname" type="text" className="form-control" required minLength="2" onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label required">Email</label>
                                    <input id="email" name="email" type="email" className="form-control" required onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="contactno" className="form-label required">Contact number</label>
                                    <input id="contactno" name="contactno" type="tel" className="form-control"
                                        pattern="[6-9]{1}[0-9]{9}" required placeholder="10 digit mobile number" onChange={handleChange} />
                                    <div className="form-text">Indian mobile (10 digits) — first digit 6-9.</div>
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label required">Gender</label>

                                    <select
                                        name="gender"
                                        id="gender"
                                        className="form-select"
                                        required
                                        value={employee.gender || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>


                                <div className="col-md-4">
                                    <label htmlFor="dob" className="form-label required">Date of birth</label>
                                    <input id="dob" name="dob" type="date" className="form-control" required onChange={handleChange} />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="joiningdate" className="form-label required">Joining date</label>
                                    <input id="joiningdate" name="joiningdate" type="date" className="form-control" required onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="adharno" className="form-label required">Aadhaar number</label>
                                    <input id="adharno" name="adharno" type="text" className="form-control"
                                        pattern="\d{12}" minLength="12" maxLength="12" required placeholder="12 digits" onChange={handleChange} />
                                    <div className="form-text">12 digits (Aadhaar).</div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="panno" className="form-label required">PAN</label>
                                    <input id="panno" name="panno" type="text" className="form-control"
                                        pattern="[A-Z]{5}[0-9]{4}[A-Z]" maxLength="10" required placeholder="ABCDE1234F" onChange={handleChange} />
                                    <div className="form-text">Format: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F).</div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="department" className="form-label required">Department</label>
                                    <input id="department" name="department" type="text" className="form-control" required onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="designation" className="form-label required">Designation</label>
                                    <input id="designation" name="designation" type="text" className="form-control" required onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="reportingmanager" className="form-label">Reporting manager</label>
                                    <input id="reportingmanager" name="reportingmanager" type="text" className="form-control" onChange={handleChange} />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="salary" className="form-label required">Salary</label>
                                    <input id="salary" name="salary" type="number" className="form-control" step="0.01" min="0" required onChange={handleChange} />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="exp" className="form-label">Experience (years)</label>
                                    <input id="exp" name="exp" type="number" className="form-control" step="0.1" min="0" placeholder="e.g. 2.5" onChange={handleChange} />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label required">Address</label>
                                    <textarea id="address" name="address" className="form-control" rows="3" required onChange={handleChange}></textarea>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="status" className="form-label required">Status</label>

                                    <select
                                        id="status"
                                        name="status"
                                        className="form-select"
                                        required
                                        value={employee.status || ""}   // <-- controls selected choice
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Choose...</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Probation">Probation</option>
                                        <option value="Resigned">Resigned</option>
                                    </select>
                                </div>


                                <div className="col-md-8">
                                    <label htmlFor="profile" className="form-label">Profile (photo)</label>
                                    <input id="profile" name="profile" type="file" accept="image/*" className="form-control" onChange={(e) => { handleProfile(e) }} />
                                    <div className="form-text">Optional — upload a profile picture (JPEG/PNG).</div>
                                </div>

                                <div className='col-md-6'>
                                    <label className='form-label'>Preview</label>
                                    {employee.profile && (
                                        <img src={employee.profile} alt="Profile" className="img-fluid" />
                                    )}

                                </div>

                                <div className="col-12 text-end">
                                    <button type="reset" className="btn btn-secondary me-2">Reset</button>
                                    <button type="submit" className="btn btn-primary">Save employee</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}