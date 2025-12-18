// import React, { useState } from "react";
// import "./Register.css";
// import EmployeeDashboard from "./EmployeeDashboard";

// export default function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setError("");
//     alert("Registered Successfully 🚀");
//   };

//   return (
//     <div>
//       {/* <EmployeeDashboard></EmployeeDashboard> */}

//     <div className="auth-bg">
//       <div className={`auth-card ${error ? "shake" : ""}`}>
//         <h3 className="text-center mb-4">Create Account</h3>

//         <form onSubmit={handleSubmit}>
//           {/* Username */}
//           <div className="form-group mb-3">
//             <input
//               type="text"
//               name="username"
//               className="form-control custom-input"
//               placeholder="Username"
//               value={form.username}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="form-group mb-3">
//             <input
//               type="password"
//               name="password"
//               className="form-control custom-input"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="form-group mb-3">
//             <input
//               type="password"
//               name="confirmPassword"
//               className="form-control custom-input"
//               placeholder="Confirm Password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             {error && <small className="text-danger">{error}</small>}
//           </div>

//           <button className="btn btn-primary w-100 animated-btn">
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-3 text-muted">
//           Already have an account? <span className="link">Login</span>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import AdminNavBar from "./AdminNavBar";

function Register() {

let navigate = useNavigate();

  // FORM STATES


  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [contactno, setContactno] = useState("");
  let [gender, setGender] = useState("");
  let [role, setRole] = useState("");
  let [eid, setEid] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");

  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);

  // REGEX VALIDATIONS
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^[0-9]{10}$/;

  // VALIDATION FUNCTION

  let [isRegister, setIsRegister] = useState(false);

  const validateForm = () => {

    if (!firstname || !lastname || !email || !contactno || !gender || !role || !username || !password || !confirmpassword) {
      setError("❌ All fields are required");
      return false;
    }

    if (!nameRegex.test(firstname)) {
      setError("❌ First name should contain only letters");
      return false;
    }

    if (!nameRegex.test(lastname)) {
      setError("❌ Last name should contain only letters");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("❌ Please enter a valid email address");
      return false;
    }

    if (!contactRegex.test(contactno)) {
      setError("❌ Contact number must be exactly 10 digits");
      return false;
    }

    if (password !== confirmpassword) {
      setError("❌ Passwords do not match");
      return false;
    }

    if (role === "Employee" && !eid) {
      setError("❌ Employee ID is required for Employee role");
      return false;
    }

    return true;
  };

  // SUBMIT HANDLER
  let handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    let user = {
      firstname,
      lastname,
      email,
      contactno: Number(contactno),
      gender,
      role,
      eid: role === "Employee" ? eid : 0,
      username,
      password,
      confirmpassword
    };

    try {
      setLoading(true);


      let response = await axios.post("http://localhost:8080/register",user);

      if (response.data === "This username already exists...Please try another username") {
        setError("❌ This username already exists");
      }
      else if (response.data === "Registration Successful") {
        setSuccess("🎉 Registration Successful");
        alert("Registration Successful");
        e.target.reset();
        setIsRegister(true);
      }

    } catch (err) {
      setError("❌ Server error. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  let loginData = {username,password}

  let userLogin = ((e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/login",loginData)
    .then((res)=>{
      if(res.data.role === "Admin"){
        navigate("/home")
      }else{
        navigate("/employeeDashboard");
      }
      localStorage.setItem("userInfo",JSON.stringify(res.data))
    })
    .catch((err)=>{
      if(err.response){
        alert(err.response.data);
      }else{
        alert("Something Wrong.")
      }
      
    })
  })

 return (
  <div>
    {!isRegister ? (
      /* ================= REGISTER FORM ================= */
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Registration Form</h2>
          <p style={styles.subtitle}>Employee Management System</p>

          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <form onSubmit={handleSubmit}>
            <div style={styles.row}>
              <input
                style={styles.input}
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <input
                style={styles.input}
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <input
              style={styles.input}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              style={styles.input}
              placeholder="Contact Number"
              value={contactno}
              onChange={(e) => setContactno(e.target.value)}
            />

            <div style={styles.row}>
              <select
                style={styles.input}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <select
                style={styles.input}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Role</option>
                <option>Admin</option>
                <option>Employee</option>
              </select>
            </div>

            {role === "Employee" && (
              <input
                style={styles.input}
                placeholder="Employee ID"
                value={eid}
                onChange={(e) => setEid(e.target.value)}
              />
            )}

            <input
              style={styles.input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              style={styles.input}
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />

            <button style={styles.button} disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

            <button style={styles.button} onClick={()=>{setIsRegister(true)}}>Already register ? click here for login</button>
          </form>
        </div>
      </div>
    ) : (
      /* ================= LOGIN FORM ================= */
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>

          <form onSubmit={userLogin}>
            <input
              type="text"
              placeholder="Username"
              className="form-control mb-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-success w-100">
              Login
            </button>
            <button style={styles.button} onClick={()=>{setIsRegister(false)}}>New user ? click here for registration</button>
          </form>
        </div>
      </div>
    )}
  </div>
);

}

export default Register;

/* 🎨 STYLES */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)"
  },
  card: {
    background: "#fff",
    padding: "30px",
    width: "420px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  title: { textAlign: "center" },
  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  row: {
    display: "flex",
    gap: "10px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  },
  error: { color: "red", textAlign: "center", marginBottom: "10px" },
  success: { color: "green", textAlign: "center", marginBottom: "10px" }
};
