import logo from './logo.svg';
import './App1.css';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
//import Sidebar from './Sidebar';

function ModifyTable() {
  return (
    // <>
    // <Sidebar />
    <div className="ModifyTable">
      {/* <h1>Patients information</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      // </>
  );

}

export default ModifyTable;
