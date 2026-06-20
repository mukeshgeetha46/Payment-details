import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './styles.css';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import ViewTransaction from './components/ViewTransaction';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Notification from './components/Notification/Notification'
import Setting from './components/Setting/Setting';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/transaction/:id" element={<ViewTransaction />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  </BrowserRouter>
);