import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function AdminDashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setName(user.firstname);
    }
  }, []);

  return (
    <div>
      <h1
        className="w-100 text-light fs-1 bg-success"
        style={{ height: "80px", textAlign: "center" }}
      >
        Welcome {name}
      </h1>
      <Navbar />
    </div>
  );
}
