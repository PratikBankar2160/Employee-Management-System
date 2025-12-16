import './App.css';
import AddEmployee from './AddEmployee';
import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllEmployee from './AllEmployee';
import UpdateEmployee from './UpdateEmployee';
import SearchEmployee from './SearchEmployee';
import AdminDashboard from './AdminDashboard';
import About_us from './About_us';
import Contact_us from './Contact_us';
import Service from './Service';
import Home from './Home';
import EmployeeDashboard from './EmployeeDashboard';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/add' element={<AddEmployee></AddEmployee>}></Route>
          <Route path='/all' element={<AllEmployee></AllEmployee>}></Route>
          <Route path='/update/:id' element={<UpdateEmployee></UpdateEmployee>}></Route>
          <Route path='/search' element={<SearchEmployee></SearchEmployee>}></Route>
          <Route path='/about_us' element={<About_us></About_us>}></Route>
          <Route path='/contact_us' element={<Contact_us></Contact_us>}></Route>
          <Route path='/services' element={<Service></Service>}></Route>
          <Route path='/employeeDashboard' element={<EmployeeDashboard></EmployeeDashboard>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
