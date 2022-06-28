import "./widget.scss";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { getTimeProps } from "antd/lib/date-picker/generatePicker";
import { async } from "@firebase/util";
import { setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Clock(){
    let [time, setTime] = useState();

    function getTime() {
      const date = new Date();
      const filterTime = date.toTimeString().split(" ")[0];
      setTime(filterTime)
    }

    useEffect(() => {
      // setInterval(getTime.apply, 1000);
      return () => {
        setInterval(getTime, 1000)
      }
    }, [])

    return time
  }

function Widget(props) {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [getTime, setTime] = useState()
  let [atten_date, atten_date_up] = useState()

  let today = new Date();

  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    
    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    
    return date.getFullYear() + '-' + month + '-' + day;
  }

  function timeFormat(date) {
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return minute + ':' + second;
  }

  useEffect(() => {
    function getToday() {
      if(dateFormat(today)!==atten_date){
        atten_date_up(dateFormat(today))
      }
    }
    getToday();
  }, [dateFormat(today)])

  useEffect(() => {
    function getDateTime(){
      if(getTime !== timeFormat(today)){
        setTime(timeFormat(today))
      }
    };
    getDateTime();
  },[getTime])

  
  async function setAtten({id}){
    try {
      //태그 로그 저장
      const docRef = setDoc(db, "beaconTag/${id}/log", atten_date,
        //로그 데이터 설정 해주어야 됨 (2022-06-28까지 진행함)  
      );
      
    } catch (err) {
      console.log("태그 데이터 불러오는 중..");
    }
  };

  console.log('atten_date : ', atten_date + today.toTimeString().split(" ")[0])
  return (
    
    <div className="atten">
      {
        props.logData.id === atten_date ?
          props.tagData.isattendance === true ?
            <>
              <span className="title">Attendance & Leave</span>
              <div className="widget">
                <div className="left">
                  <span className="title">Attendance</span>
                  <span className="location">Location : {props.cusData.location[props.logData.log_attendance[0]]}</span>
                  <span className="att_date">{props.logData.id} <span className="att_time">{props.logData.log_attendance[1]}</span></span>
                </div>
                <div className="center"></div>
                <div className="right">
                  <span className="att_date"></span>
                  <Button className="buttons" variant="outline-success" disabled>출근완료</Button>
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Leave</span>
                  <span className="location">퇴근 버튼을 누르시면 퇴근시간이 기록됩니다.</span>
                  <span className="att_date">{atten_date} <span className="att_time"><Clock/></span></span>
                </div>
                <div className="right">
                  <span className="att_date"></span>
                  <Button className="buttons" variant="outline-danger">퇴 근</Button>
                </div>
              </div>
            </>
          :
            <>
              <span className="title">Attendance & Leave</span>
              <div className="widget">
                <div className="left">
                  <span className="title">Attendance</span>
                  <span className="location">Location : {props.cusData.location[props.logData.log_attendance[0]]}</span>
                  <span className="att_date">{props.logData.id} <span className="att_time">{props.logData.log_attendance[1]}</span></span>
                </div>
                <div className="center"></div>
                <div className="right">
                  <span className="att_date"></span>
                  <Button className="buttons" variant="outline-success" disabled>출근완료</Button>
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Leave</span>
                  <span className="location">Location : {props.cusData.location[props.logData.log_leave[0]]}</span>
                  <span className="att_date">{props.logData.id} <span className="att_time">{props.logData.log_leave[1]}</span></span>
                </div>
                <div className="right">
                  <span className="att_date"></span>
                  <Button className="buttons" variant="outline-danger" disabled>퇴근완료</Button>
                </div>
              </div>
            </>
        :
          <>
            <span className="title">Attendance & Leave</span>
            <div className="widget">
              <div className="left">
                <span className="title">Attendance</span>
                <span className="location">출근 버튼을 누르시면 출근시간이 기록됩니다.</span>
                <span className="att_date">{atten_date}</span>
              </div>
              <div className="center"></div>
              <div className="right">
                <span className="att_date"></span>
                <Button className="buttons" variant="outline-success" onClick={setAtten(props.tagData.id)} >출 근</Button>
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Leave</span>
                <span className="location">현재 미출근 상태입니다.</span>
                <span className="att_date"></span>
              </div>
              <div className="right">
                <span className="att_date"></span>
                <Button className="buttons" variant="outline-danger" disabled>미 출 근</Button>
              </div>
            </div>
          </>
      }




    </div>
  )
};

export default Widget
