import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import TableWarehouseDetail from './Component/Table/Detail';
import TableWarehouse from './Component/Table/Table';

const App = () => {
  const { id } = useParams();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<TableWarehouse/>}/>
            <Route path='/warehouse/:id' element={<TableWarehouseDetail id={id}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
