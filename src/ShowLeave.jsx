import axios from "axios";
import React, { useEffect, useState } from "react";
import EmpNavbar from "./EmpNavbar";

export default function ShowLeave() {

    // ================= STATES =================
    const [leaves, setLeaves] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [selectedLeave, setSelectedLeave] = useState({
        id: "",
        reason: "",
        fromdate: "",
        todate: ""
    });

    // ================= FETCH LEAVES =================
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        axios
            .get(`http://localhost:8080/leave/employee/${user.eid}`)
            .then((res) => setLeaves(res.data))
            .catch(() => alert("Something went wrong while fetching leaves"));
    }, []);

    // ================= OPEN UPDATE MODAL =================
    const openUpdateModal = (leave) => {
        setSelectedLeave({
            id: leave.id,
            reason: leave.reason,
            fromdate: leave.fromdate,
            todate: leave.todate
        });
        setShowModal(true);
    };

    // ================= HANDLE INPUT CHANGE =================
    const handleChange = (e) => {
        setSelectedLeave({
            ...selectedLeave,
            [e.target.name]: e.target.value
        });
    };

    // ================= UPDATE LEAVE =================
    const updateLeave = (e) => {
        e.preventDefault();

        axios
            .put(
                `http://localhost:8080/leave/update/${selectedLeave.id}`,
                selectedLeave
            )
            .then(() => {
                alert("Leave updated successfully!");

                // Update UI instantly
                setLeaves((prev) =>
                    prev.map((l) =>
                        l.id === selectedLeave.id ? { ...l, ...selectedLeave } : l
                    )
                );

                setShowModal(false);
            })
            .catch(() => alert("Something went wrong while updating leave"));
    };

    // ================= DELETE LEAVE =================
    const deleteLeave = (id) => {
        if (!window.confirm("Are you sure you want to delete this leave?")) return;

        axios
            .delete(`http://localhost:8080/leave/cancel/${id}`)
            .then(() => {
                setLeaves((prev) => prev.filter((l) => l.id !== id));
            })
            .catch(() => alert("Something went wrong while deleting leave"));
    };

    // ================= JSX =================
    return (
        <>
            <EmpNavbar />

            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="card-body">

                        <h3 className="text-center fw-bold mb-4">Leave Applications</h3>

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
                                    {leaves.length > 0 ? (
                                        leaves.map((leave) => (
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
                                                    <div className="d-flex justify-content-center gap-2">
                                                        <button
                                                            className="btn btn-sm btn-outline-primary"
                                                            disabled={leave.status === "Approved"}
                                                            onClick={() => openUpdateModal(leave)}
                                                        >
                                                            Update
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            disabled={leave.status === "Approved"}
                                                            onClick={() => deleteLeave(leave.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
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

            {/* ================= UPDATE MODAL ================= */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Update Leave</h5>
                                <button className="btn-close" onClick={() => setShowModal(false)} />
                            </div>

                            <form onSubmit={updateLeave}>
                                <div className="modal-body">

                                    <div className="mb-3">
                                        <label className="form-label">Reason</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="reason"
                                            value={selectedLeave.reason}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">From Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="fromdate"
                                            value={selectedLeave.fromdate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">To Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="todate"
                                            value={selectedLeave.todate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-success">
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

