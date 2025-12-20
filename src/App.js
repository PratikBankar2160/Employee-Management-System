import './App.css';
import AddEmployee from './AddEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllEmployee from './AllEmployee';
import UpdateEmployee from './UpdateEmployee';
import SearchEmployee from './SearchEmployee';
import About_us from './About_us';
import Contact_us from './Contact_us';
import Service from './Service';
import Home from './Home';
import EmployeeDashboard from './EmployeeDashboard';
import Register from './Register';
import EmployeeContactUs from './EmployeeContactUs';
import EmployeeServices from './EmployeeServices';
import EmployeeAboutUs from './EmployeeAboutUs';
import EmployeeHome from './EmployeeHome';
import LeaveApplication from './LeaveApplication';
import ShowLeave from './ShowLeave';
import UpdateLeaveApplication from './UpdateLeaveApplication';
import EmployeeLeaves from './EmployeeLeaves';
import Logout from './Logout';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/Ehome' element={<EmployeeHome></EmployeeHome>}></Route>
          <Route path='/add' element={<AddEmployee></AddEmployee>}></Route>
          <Route path='/all' element={<AllEmployee></AllEmployee>}></Route>
          <Route path='/update/:id' element={<UpdateEmployee></UpdateEmployee>}></Route>
          <Route path='/search' element={<SearchEmployee></SearchEmployee>}></Route>
          <Route path='/about_us' element={<About_us></About_us>}></Route>
          <Route path='/Eabout_us' element={<EmployeeAboutUs></EmployeeAboutUs>}></Route>
          <Route path='/contact_us' element={<Contact_us></Contact_us>}></Route>
          <Route path='/empContactUs' element={<EmployeeContactUs></EmployeeContactUs>}></Route>
          <Route path='/services' element={<Service></Service>}></Route>
          <Route path='/Eservices' element={<EmployeeServices></EmployeeServices>}></Route>
          <Route path='/employeeDashboard' element={<EmployeeDashboard></EmployeeDashboard>}></Route>
          <Route path='/leave' element={<LeaveApplication></LeaveApplication>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/seeLeave' element={<ShowLeave></ShowLeave>}></Route>
          <Route path='/updateLeave/:id' element={<UpdateLeaveApplication></UpdateLeaveApplication>}></Route>
          <Route path='/employeeLeaves' element={<EmployeeLeaves></EmployeeLeaves>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
