import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

export default function SearchEmployee() {
    let [sort, setSort] = useState("name");

    let navigate = useNavigate();

    const [Employee, setEmployee] = useState([]);

    let [name, setName] = useState("");

    let HandelChange = (e) => {
        setName(e.target.value)
    };

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

    let Fetch = (e) => {
        e.preventDefault();

        if (!sort || !name) {
            alert("Please select search type and enter value");
            return;
        }

        if (sort === "Surname") {

            axios.get(`http://localhost:8080/findByLastName/${name}`)
                .then((res) => {
                    setEmployee(res.data);
                })
                .catch((err) => {
                    alert("Error in get")
                })
        } else if (sort === "Department") {

            axios.get(`http://localhost:8080/findByDepartment/${name}`)
                .then((res) => {
                    setEmployee(res.data);
                })
                .catch((err) => {
                    alert("Error in get")
                })
        } else if (sort === "Designation") {

            axios.get(`http://localhost:8080/findByDesignation/${name}`)
                .then((res) => {
                    setEmployee(res.data);
                })
                .catch((err) => {
                    alert("Error in get")
                })
        } else {

            axios.get(`http://localhost:8080/findByFirstName/${name}`)
                .then((res) => {
                    setEmployee(res.data);
                })
                .catch((err) => {
                    alert("Error in get")
                })
        }
    }
    return (
        <div>
            <AdminDashboard/>
            <div>
                <h1>Search Employee</h1>
                <form onSubmit={Fetch}>
                    <label htmlFor="name">{`Enter employee ${sort}`}</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name='name' id='name' placeholder={`Enter employee ${sort}`} onChange={HandelChange} style={{ width: "400px" }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <select onChange={((e) => { setSort(e.target.value) })}>
                        <option value="">------ Find by ------</option>
                        <option value="Name">Name</option>
                        <option value="Surname">Surname</option>
                        <option value="Department">Department</option>
                        <option value="Designation">Designation</option>
                    </select>
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
                                        <h5 className="card-title">{e.firstname} {e.lastname}</h5>
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





// let Fetch = (e) => {
//   e.preventDefault();

//   if (!sort || !name) {
//     alert("Please select search type and enter value");
//     return;
//   }

//   const urlMap = {
//     Name: "findByFirstName",
//     Surname: "findByLastName",
//     Department: "findByDepartment",
//     Designation: "findByDesignation"
//   };

//   axios.get(`http://localhost:8080/${urlMap[sort]}/${name}`)
//     .then(res => setEmployee(res.data))
//     .catch(() => alert("Error in get"));
// };