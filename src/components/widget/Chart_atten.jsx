import "./widget.scss";
import React, { useEffect, useState } from 'react';
import { Button, ProgressBar } from "react-bootstrap";

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

  return (<>{time}</>)
}

function Chart_atten(props) {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [atten, atten_up] = useState(true)
  let [atten_date, atten_date_up] = useState()
  let [atten_time, setAtten_time] = useState([0, "분", 0])
  
  let [time, setTime] = useState();

  function getTime() {
    const date = new Date();
    const filterTime = date.toTimeString().split(" ")[0];
    setTime(filterTime)
  }

  // useEffect(() => {
  //   // setInterval(getTime.apply, 1000);
  //   return () => {
  //     setInterval(getTime, 1000)
  //   }
  // }, [])


  function timeFormat(){
    let a =  new Date(props.logData.id + " " + props.logData.log_attendance[1]); //비교대상
    let b=  new Date() //현재시간
    let per_time = 0;
    let result = Math.floor((b-a)/1000/60/60)  //시간 차이 계산  1000/60 일경우 분 차이 //1000이면 초 차이
      if(result>24){  //시간이 24시간이상 차이날 경우 24시간(1일)
          result = Math.floor(result/24) 
          // console.log(result);
          if(result>7){ //시간이 24시간 이상차이나고 7일 이상 차이날떄
            result = `${a.getFullYear()}. ${a.getMonth()+1} .${a.getDay()}`
            //2020 . 12 . 15 로 표시 
          }else //24시간 이상 차이나고 7일 이내면 Day + '일'로 표시하기
          result = result +'일전' //ex)  5일전 으로 표시
          
        }
        else if(result == 0){ // 시간차이가 1시간 미만일 경우
          result = Math.floor((b-a)/1000/60) //ex) 시간차이 + `분`으로 표시하기
          setAtten_time([result, "분", per_time])
      }
      else{// 1시간 이상 24시간 미만으로 차이날 경우 시간차이로 표시하기
        per_time = result / 8 * 100;
        setAtten_time([result, "시간", per_time])
        if(b.toTimeString().split(" ")[0] >= "13:00:00"){
          result = result - 1;
          per_time = result / 8 * 100;
          setAtten_time([result, "시간", per_time])
        }
      }
      
    // console.log(atten_time);
  }

  useEffect(()=>{
    // setInterval(getTime.apply, 1000);
    timeFormat()
    return () => {
      setInterval(getTime, 1000)
    }
  }, [])// useEffect(()=>{}. []-> 중괄호 생략시 Traffic issue 발생)

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

  useEffect(() => {
    function getToday() {
      if(dateFormat(today)!==atten_date){
        atten_date_up(dateFormat(today))
      }
    }
    getToday();
  }, [dateFormat(today)])

  // console.log('time', time)

  return (
    // 일일 계산식 완료 timeFormat() 참조
    <div className="charts">
      <div className="widget">
        <div className="left">
          <span className="title">Daily cumulative time</span>
          <div className="progressbar"><ProgressBar variant="success" now={atten_time[2]} /></div>
          <div className="date_box">
              <span className="att_date">{atten_date}</span>
              <div className="time_box">
                  {atten_time[0].toString()}
                  <span className="title">{atten_time[1]}</span>
              </div>
          </div>
        </div>
        <div className="center"></div>
        <div className="right">
          <span className="att_date"></span>
        </div>
      </div>

      {/* 월 시간 계산 식 보류 */}
      <div className="widget">
        <div className="left">
          <span className="title">Monthly cumulative time</span>
          <div className="progressbar"><ProgressBar variant="warning" now={40} /></div>
          <div className="date_box">
              <span className="att_date">2022.xx</span>
              <div className="time_box">
                  30
                  <span className="title">hours</span>
              </div>
          </div>
        </div>
        <div className="center">
        </div>
        <div className="right">
          <span className="att_date"></span>
        </div>
      </div>
    </div>
  )
};

export default Chart_atten
