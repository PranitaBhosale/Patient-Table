import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import ModifyTable from './ModifyTable';

function App() {
  return (
    
    <div className="App">
      {/* <h1>Hii</h1> */}
     <ModifyTable />
    </div>
    
  );

}

export default App;
