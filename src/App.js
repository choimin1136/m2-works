import { useContext, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import Login_User from './layout/login/Login_user';
import Dashboard from './container/Dashboard';
import Topbar from './components/topbar/Topbar';
import Home from './layout/home/Home';
import Single from './layout/single/Single';
import New from './layout/new/New';
import List from './layout/list/List';
import Login from './layout/login/Login';
import "./style/dark.scss";
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {
  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext);


  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // console.log(currentUser)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login/>}/>
            <Route index element={
              <RequireAuth>
                <Home/>
              </RequireAuth>}/>
            <Route path="users">
              <Route index element={
                <RequireAuth>
                  <List/>
                </RequireAuth>}/>
              <Route path=":userEmail" element={
                <RequireAuth><Single/></RequireAuth>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={
                <RequireAuth>
                  <List/>
                </RequireAuth>}/>
              <Route path=":productId" element={
                <RequireAuth>
                  <Single/>
                </RequireAuth>}/>
              <Route path="new" element={
                <RequireAuth>
                  <New/>
                </RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
