import "./sidebar.scss";
import MonitorIcon from '@mui/icons-material/Monitor';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">
                <img src="../logo2.png" alt="" width="120" height="45"/>
            </span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">WORKS</p>
                <li>
                    <MonitorIcon className="icon" />
                    <span>Attendance</span>
                </li>
                <p className="title">ADMIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Employee</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
