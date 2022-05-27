import "./widget.scss";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { auth, db } from "../../firebase";
import { collection, query, where, onSnapshot, getDocs, doc, documentId } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";


  

const Widget = () => {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [atten, atten_up] = useState(true)
  let [atten_date, attten_date_up] = useState(["2022.xx.xx", "2022.x1.x1"])
  let [data, setData] = useState([]);

  let {log_dispatch} = useContext(AuthContext);

  const user_email = "choimin1136@gmail.com";


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData.email);

    const getLog = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "employee"));
        querySnapshot.forEach((doc) => {
          if (userData.email == doc.data().email) {
            list.push({id:doc.id, ...doc.data()});
          }
        });
        const querySnapshot1 = await getDocs(collection(db, "beaconTag"));
        querySnapshot1.forEach((doc) => {
          if (list[0].tag_serial == doc.id) {
            list.push({id:doc.id, ...doc.data()});
          }
        });
        const querySnapshot2 = await getDocs(collection(db, "beaconTag/"+list[1].id+"/log"));
        const logList = [];
        querySnapshot2.forEach((doc) => {
          logList.push({id:doc.id, ...doc.data()});
        });
        list.push(logList);
        setData(list);
      } catch (err) {
        console.log(err);
        alert('로그인 시간 만료');
        log_dispatch({type: "LOGOUT"});
      }
    };
    getLog();
  }, []);

  console.log(data)

  return (
    <div className="atten">
      <span className="title">Attendance & Leave</span>
      <div className="widget">
        <div className="left">
          <span className="title">Attendance</span>
          <span className="location">Location : {location[0]}</span>
          <span className="att_date">{atten_date[0]}</span>
        </div>
        <div className="center"></div>
        <div className="right">
          <span className="att_date"></span>
          <Button className="buttons" variant="outline-success">Check Now</Button>
        </div>
      </div>
      <div className="widget">
      <div className="left">
        <span className="title">Leave</span>
        <span className="location">Location : {location[1]}</span>
        <span className="att_date">{atten_date[0]}</span>
      </div>
      <div className="right">
        <span className="att_date"></span>
        {}
        <Button className="buttons" variant="outline-danger">Check Now</Button>
      </div>
    </div>
    </div>
  )
};

export default Widget
