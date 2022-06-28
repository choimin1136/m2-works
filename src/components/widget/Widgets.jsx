import "./widget.scss";
import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { AccountBalanceOutlined, PeopleAlt, KeyboardArrowUp, MonetizationOnOutlined, Business, } from "@material-ui/icons";
import { MonitorOutlined } from "@mui/icons-material";
import { breadcrumbsClasses } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

function Widgets({ type }, props) {
    let data;
    let [cusData, set_cusData] = useState(0);
    let [empData, set_empData] = useState(0);


    useEffect(() => {
        const getCom = async (params) => {
            try {
              //로그 정보 호출
              let emp_list = []
              const querySnapshot = await getDocs(query(collection(db, "employee"), where("cus_serial", "==", cusData)));
              console.log('docs', querySnapshot.docs[0].id)
              querySnapshot.docs.map((doc)=>(
                emp_list.push({id:doc.id, ...doc.data()})
              ))
              set_empData(emp_list);
            } catch (err) {
              console.log('회사 데이터 불러오는 중..')
              console.log(empData)
            }
          };
          getCom();
    }, [props])

    useEffect(() => {
        const getAtten = async (params) => {
            try {
              //로그 정보 호출
              let emp_list = []
              const querySnapshot = await getDocs(query(collection(db, "employee"), where("cus_serial", "==", cusData)));
              console.log('docs', querySnapshot.docs[0].id)
              querySnapshot.docs.map((doc)=>(
                emp_list.push({id:doc.id, ...doc.data()})
              ))
              set_empData(emp_list);
            } catch (err) {
              console.log('회사 데이터 불러오는 중..')
              console.log(empData)
            }
          };
          getAtten();
    }, [])
    
    // console.log('cusData', empData)

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                count: empData.length,
                link: "See all users",
                icon: <PeopleAlt className="icon" style={
                    {color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)" }} />,
            };
            break;
        case "order":
            data={
                title:"Attendance User",
                isMoney: false,
                link: "View all orders",
                icon: <Business className="icon" style={
                    {color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)" }}  />,
            };
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney: false,
                link: "View all earnings",
                icon: <MonetizationOnOutlined className="icon" style={
                    {color: "goldenrod",
                    backgroundColor: "rgba(128, 165, 32, 0.2)" }} />,
            };
            break;
        case "balance":
            data={
                title:"BALANCES",
                isMoney: false,
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
        {empData === null
        ?
        <div className="loading">
        
        </div>
        :
            <>
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="counter">{data.count} </span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                    </div>
                    {data.icon}
                </div>
            </>
        }
        </div>
    )
};

export default Widgets