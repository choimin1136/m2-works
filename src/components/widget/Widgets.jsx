import "./widget.scss";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { AccountBalanceOutlined, KeyboardArrowDown, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { MonitorOutlined } from "@mui/icons-material";
import { breadcrumbsClasses } from "@mui/material";

const Widgets = ({ type }) => {
    let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
    let [atten, atten_up] = useState(true)
    let [atten_date, attten_date_up] = useState(["2022.xx.xx", "2022.x1.x1"]) 

    let data;

    const people = 6;
    const won = "2,000,000";

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlined className="icon" style={
                    {color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)" }} />,
            };
            break;
        case "order":
            data={
                title:"Attendance User",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlined className="icon" style={
                    {color: "goldenrod",
                    backgroundColor: "rgba(128, 165, 32, 0.2)" }}  />,
            };
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney: true,
                link: "View all earnings",
                icon: <MonetizationOnOutlined className="icon" style={
                    {color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)" }} />,
            };
            break;
        case "balance":
            data={
                title:"BALANCES",
                isMoney: true,
                link: "View all balances",
                icon: <AccountBalanceOutlined className="icon" style={
                    {color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)" }} />,
            };
            break;
        default :
            break;
    }

    return (
        <div className="widget">
          <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney  === true ? "￦ " + won : people} </span>
            <span className="link">{data.link}</span>
          </div>
          <div className="right">
              <div className="percentage positive">
                  <KeyboardArrowUp />
                  20 %
              </div>
              {data.icon}
          </div>
        </div>
    )
};

export default Widgets