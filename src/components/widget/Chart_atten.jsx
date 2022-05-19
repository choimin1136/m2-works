import "./widget.scss";
import React, { useState } from 'react';
import { Button, ProgressBar } from "react-bootstrap";

const Chart_atten = () => {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [atten, atten_up] = useState(true)
  let [atten_date, attten_date_up] = useState(["2022.xx.xx", "2022.x1.x1"])

  return (
    <div className="charts">
      <div className="widget">
      <div className="left">
        <span className="title">일간 근무 시간</span>
        <div className="progressbar"><ProgressBar variant="success" now={90} /></div>
        <div className="date_box">
            <span className="att_date">{atten_date[0]}</span>
            <div className="time_box">
                7
                <span className="title">시간</span>
            </div>
        </div>
      </div>
        <div className="center"></div>
        <div className="right">
        <span className="att_date"></span>
        </div>
      </div>
      <div className="widget">
      <div className="left">
        <span className="title">월간 근무 시간</span>
        <div className="progressbar"><ProgressBar variant="warning" now={40} /></div>
        <div className="date_box">
            <span className="att_date">2022.xx</span>
            <div className="time_box">
                30
                <span className="title">시간</span>
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
