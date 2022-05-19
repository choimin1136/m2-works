import "./widget.scss";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const Widget = () => {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [atten, atten_up] = useState(true)
  let [atten_date, attten_date_up] = useState(["2022.xx.xx", "2022.x1.x1"]) 

  return (
    <div className="atten">
      <span className="title">출/퇴근 관리</span>
      <div className="widget">
        <div className="left">
          <span className="title">출근</span>
          <span className="location">장소 : {location[0]}</span>
          <span className="att_date">{atten_date[0]}</span>
        </div>
        <div className="center"></div>
        <div className="right">
          <span className="att_date"></span>
          <Button className="buttons" variant="outline-success">출근 확인</Button>
        </div>
      </div>
      <div className="widget">
      <div className="left">
        <span className="title">퇴근</span>
        <span className="location">장소 : {location[1]}</span>
        <span className="att_date">{atten_date[0]}</span>
      </div>
      <div className="center"></div>
      <div className="right">
        <span className="att_date"></span>
        {}
        <Button className="buttons" variant="outline-danger">퇴근 확인</Button>
      </div>
    </div>
    </div>
  )
};

export default Widget
