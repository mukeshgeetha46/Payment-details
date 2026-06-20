import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './styles.css';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import ViewTransaction from './components/ViewTransaction';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/transaction/:id" element={<ViewTransaction />} />
      </Route>
    </Routes>
  </BrowserRouter>
);