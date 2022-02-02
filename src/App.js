import React, { createContext, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router, Route, Routes,
  useRoutes,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Invoice from "./components/Invoice/Invoice";
import CreateUser from "./components/create-user/Create";
import Transaction from "./components/transaction/Transaction";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/users/users";
// import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/Auth/Auth';
import Settings from './components/setting/Setting';
import Payment from './components/payment/Payment';
import TransactionHistory from "./components/transaction/TransactionHistory";

function App() {

  return (
    <React.StrictMode>
      <Router>
        <Routes>

          <Route exact path="/" element={<Login />} >

          </Route>
          <Route exact path="/transactions" element={
            <Transaction />
          }>

          </Route>
          <Route path="/dashboard" element={<Dashboard />}>

          </Route>
          <Route path="/invoice" element={<Invoice />}>

          </Route>
          <Route path="/new/user" element={<CreateUser />}>

          </Route>
          <Route path="/users" element={<Users />}>

          </Route>
          <Route path="/settings" element={<Settings />}>

          </Route>
          <Route path="/payment" element={<Payment />}>

          </Route>
          <Route path="/transactions/history" element={<TransactionHistory />}>

          </Route>

          {/*   */}
          {/* <Route path="/balance">
                <Balance />
              </Route> */}

        </Routes >
      </Router >
    </React.StrictMode >
  );

}

export default App;
