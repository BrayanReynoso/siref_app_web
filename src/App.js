import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/navigation/SidebarAdmin';
import TableDataOne from './components/tableData/TableDataOne';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './auth/screens/LoginScreen';
import NavbarUser from './components/navigation/NavbarUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/admin_jorges" element={<Sidebar />} />
        <Route path="/home" element={<NavbarUser />} />
        <Route path="/table-data" element={<TableDataOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
