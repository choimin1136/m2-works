import "./widget.scss";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const Widget = () => {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [atten, atten_up] = useState(true)
  let [atten_date, attten_date_up] = useState(["2022.xx.xx", "2022.x1.x1"]) 

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
