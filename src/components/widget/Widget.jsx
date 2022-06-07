import "./widget.scss";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { auth, db } from "../../firebase";
import { collection, query, where, onSnapshot, getDocs, getDoc, doc, documentId, docs} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";


  

const Widget = () => {
  let [location, location_up] = useState(["첨단 3D 상용화지원센터", "하남 kbi 지식산업센터"])
  let [atten, atten_up] = useState(true)
  let [atten_date, attten_date_up] = useState(["2022.xx.xx", "2022.x1.x1"])
  let [empData, setEmp] = useState();
  let [tagData, setTag] = useState();
  let [logData, setLog] = useState();

  let {log_dispatch} = useContext(AuthContext);

  const user_email = "choimin1136@gmail.com";


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const tag_serial = "testBeacon";
    // console.log(userData.email);

    const getLog = async () => {
      try {
        //로그인 데이터 기반 사원 데이터 호출
        const querySnapshot = await getDocs(query(collection(db, "employee"), where("email", "==", userData.email)));
        querySnapshot.docs.map((doc)=>(
          setEmp({id:doc.id, ...doc.data()})
        ))

        // querySnapshot.map.docs((doc) => {
        //   if (userData.email === doc.data().email) {
        //     setEmp({id:doc.id, ...doc.data()});
        //   }
        // })

        //태그 정보 호출
        const docRef = doc(db, "beaconTag", empData.tag_serial.toString());
        const docSnap = await getDoc(docRef);
        setTag({id:docSnap.id, ...docSnap.data()})
        console.log(tagData.id.toString())

        // querySnapshot1.map.docs((doc) => {
        //   if (empData.tag_serial === doc.id) {
        //     setTag({id:doc.id, ...doc.data()});
        //   }
        // });

        //로그 정보 호출
        const querySnapshot2 = await getDocs(query(collection(db, "beaconTag/"+tagData.id.toString()+"/log")));
        querySnapshot2.docs.map((doc)=>(
          setLog({id:doc.id, ...doc.data()})
        ))
        // const querySnapshot2 = await getDocs(collection(db, "beaconTag/"+tagData.id.toString()+"/log"));
        // const logList = [];
        // querySnapshot2.map.docs((doc) => {
        //   logList.push({id:doc.id, ...doc.data()});
        // });

        //Location 정보 호출
        
      } catch (err) {
        console.log(err);
        // alert('로그인 시간 만료');
        // log_dispatch({type: "LOGOUT"});
      }
    };
    getLog();
  }, []);

  console.log(empData)
  console.log(tagData)
  console.log(logData)

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
