import React from 'react'
import { Col } from 'react-bootstrap';
import { Chart } from '../../components/charts/Chart';
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './single.scss'




export default function Single(props) {

  const userData = [
    {
      id: props.id,
      username: "Alex",
      img: "https://firebasestorage.googleapis.com/v0/b/safe-zone-backup.appspot.com/o/photo_2021-11-05_14-33-40.jpg?alt=media&token=e83652b3-171c-4844-b658-c99a414b4d37",
      email: "choimin1136@gmail.com",
      status: "active",
      join_date: "2021-05-31",
      age: 25,
    },
  ];

  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <Col xxl={5}>
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://firebasestorage.googleapis.com/v0/b/safe-zone-backup.appspot.com/o/photo_2021-11-05_14-33-40.jpg?alt=media&token=e83652b3-171c-4844-b658-c99a414b4d37" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{props.empData.nickname}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email: </span>
                    <span className="itemBalue">{props.empData.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Team: </span>
                    <span className="itemBalue">{props.empData.team}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Position: </span>
                    <span className="itemBalue">{props.empData.position}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Work Date: </span>
                    <span className="itemBalue">{props.empData.emp_date}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="todays">
                  <div className="editButton">Edit</div>
                  <h1 className="title">todays</h1>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={7}>
            <div className="right">
              <Chart />
            </div>
          </Col>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}
