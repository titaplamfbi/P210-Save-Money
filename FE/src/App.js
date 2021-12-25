import React, { useState } from "react";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import adminStorageKeys from "./constant/admin-storage-keys";
import storageKeys from "./constant/storage-keys";
import Account from "./pages/account";
import AddUser from "./pages/admin/addUser";
import AllUsers from "./pages/admin/allUser";
import AdminHomePage from "./pages/admin/components/homepage";
import EditDeleteUser from "./pages/admin/editDeleteUser";
import LoginAdmin from "./pages/admin/login";
import Profit from "./pages/admin/Profit";
import ShowProfit from "./pages/profit";

import ErrorPage from "./pages/error";
import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import SendMoney from "./pages/sendMoney";
import HistoryAllUser from "./pages/admin/history";

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem(adminStorageKeys.TOKEN) != null
  );
  const [isUserLogin, setIsUserLogin] = useState(
    localStorage.getItem(storageKeys.TOKEN) != null
  );
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        <Route path="/home" element={<LandingPage />} />{" "}
        <Route
          path="/login"
          element={isUserLogin ? <LandingPage /> : <Login />}
        />
        <Route
          path="/register"
          element={isUserLogin ? <LandingPage /> : <Register />}
        />
        <Route path="/send" element={isUserLogin ? <SendMoney /> : <Login />} />{" "}
        <Route
          path="/profit"
          element={isUserLogin ? <ShowProfit /> : <Login />}
        />
        <Route
          path="/account"
          element={isUserLogin ? <Account /> : <Login />}
        />
        <Route
          path="/admin"
          element={isLogin ? <AdminHomePage /> : <LoginAdmin />}
        />
        <Route
          path="/admin/allusers"
          element={isLogin ? <AllUsers /> : <LoginAdmin />}
        />
        <Route
          path="/admin/dashboard"
          element={isLogin ? <AdminHomePage /> : <LoginAdmin />}
        />
        <Route
          path="/admin/profit"
          element={isLogin ? <Profit /> : <LoginAdmin />}
        />
        <Route
          path="/admin/history"
          element={isLogin ? <HistoryAllUser /> : <LoginAdmin />}
        />
        <Route
          path="/admin/allusers/add"
          element={isLogin ? <AddUser /> : <LoginAdmin />}
        />
        <Route
          path="/admin/allusers/edit"
          element={isLogin ? <EditDeleteUser /> : <LoginAdmin />}
        />
        <Route path="*" element={<ErrorPage />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
