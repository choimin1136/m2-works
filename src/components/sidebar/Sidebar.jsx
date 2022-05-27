import "./sidebar.scss";
import MonitorIcon from '@mui/icons-material/Monitor';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

export const Sidebar = () => {
    let [admin, admin_up] = useState(true);
    let {dispatch} = useContext(DarkModeContext);
    let {log_dispatch} = useContext(AuthContext);

  return (
    <div className="sidebar">
        <div className="top">
            <Link to={"/"} style={{textDecoration: "none"}}>
                <span className="logo">
                    <img src="../logo2.png" alt="" width="120" height="45"/>
                </span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">WORKS</p>
                <li>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <MonitorIcon className="icon" />
                        <span>Attendance</span>
                    </Link>
                </li>

                {
                    admin === true ?
                    <>
                        <p className="title">ADMIN</p>
                        <li>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </li>
                        <li>
                            <Link to={"/users"} style={{textDecoration: "none"}}>
                                <PersonOutlineOutlinedIcon className="icon"/>
                                <span>Employee</span>
                            </Link>
                        </li>
                    </>
                    : null
                }


                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li onClick={()=>{
                    log_dispatch({type:"LOGOUT"})
                }}>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({ type: "LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({ type: "DARK"})}></div>
        </div>
    </div>
  )
}
