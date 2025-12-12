import './App.css';
import AddEmployee from './AddEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import AllEmployee from './AllEmployee';
import UpdateEmployee from './UpdateEmployee';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/add' element={<AddEmployee></AddEmployee>}></Route>
          <Route path='/all' element={<AllEmployee></AllEmployee>}></Route>
          <Route path='/update/:id' element={<UpdateEmployee></UpdateEmployee>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
