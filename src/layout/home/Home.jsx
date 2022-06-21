
import React, {useState, useEffect, useContext} from 'react'
import { Col } from 'react-bootstrap'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Chart_atten from '../../components/widget/Chart_atten'
import Widget from '../../components/widget/Widget'
import Widgets from '../../components/widget/Widgets'
import Single from '../single/Single'
import "./home.scss"
import { auth, db } from "../../firebase";
import { collection, query, where, onSnapshot, getDocs, getDoc, doc, documentId, docs} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
//import Unity, { UnityContext } from "react-unity-webgl";

// const unityContext = new UnityContext({
//   loaderUrl: "Build/Meta_prototype_WebGL1.loader.js",
//   dataUrl: "Build/Meta_prototype_WebGL1.data",
//   frameworkUrl: "Build/Meta_prototype_WebGL1.framework.js",
//   codeUrl: "Build/Meta_prototype_WebGL1.wasm",
// });


export default function Home() {

  let [userData, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  let [empData, setEmp] = useState(null);
  let [tagData, setTag] = useState();
  let [cusData, setCus] = useState();
  let [logData, setLog] = useState(null);

  let {log_dispatch} = useContext(AuthContext);

  const user_email = "choimin1136@gmail.com"

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [])

  useEffect(() => {
    const tag_serial = "testBeacon";
    // console.log(userData.email);

    const getUser = async () => {
      try {
        //로그인 데이터 기반 사원 데이터 호출
        const querySnapshot = await getDocs(query(collection(db, "employee"), where("email", "==", userData.email)));
        querySnapshot.docs.map((doc)=>(
          setEmp({id:doc.id, ...doc.data()})
        ))
      } catch (err) {
        console.log(err);
        setUser(JSON.parse(localStorage.getItem("user")));
      }
    };
    getUser();
  }, [userData]);

  useEffect(() => {
      const getTag = async (params) => {
        try {
          //태그 정보 호출
          const docRef = doc(db, "beaconTag", empData.tag_serial.toString());
          const docSnap = await getDoc(docRef);
          setTag({id:docSnap.id, ...docSnap.data()})
        } catch (err) {
          console.log("태그 데이터 불러오는 중..");
        }
      };
      getTag();
  }, [empData])

  useEffect(() => {
    const getCom = async (params) => {
      try {
        //로그 정보 호출
        const querySnapshot = await getDocs(query(collection(db, "customers"), where("cus_serial", "==", 0)));
        querySnapshot.docs.map((doc)=>(
          setCus({id:doc.id, ...doc.data()})
        ))
      } catch (err) {
        console.log('회사 데이터 불러오는 중..')
      }
    };
    getCom();
  }, [tagData])

  useEffect(() => {
    const getLog = async (params) => {
      try {
        //로그 정보 호출
        const querySnapshot = await getDocs(query(collection(db, "beaconTag/"+tagData.id.toString()+"/log")));
        querySnapshot.docs.map((doc)=>(
          setLog({id:doc.id, ...doc.data()})
        ))
      } catch (err) {
        console.log('로그 데이터 불러오는 중..')
      }
    };
    getLog();
  }, [tagData])
  
  
  
  console.log(empData)
  console.log(tagData)
  console.log(cusData)
  console.log(logData)


  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>

        {logData === null ? 
          <div className="loading">
            로딩중 입니다....
          </div>
          :
          <> 
            <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
            {/* <Unity className='unity' unityContext={unityContext}/> */}
            </div>
            <div className="a_widgets">
              <Col xxl={6} xs={6}>
                <Widget logData = {logData} cusData = {cusData} tagData = {tagData} />
              </Col>
              <Col xxl={6} xs={6}>
                <Chart_atten />
              </Col>
            </div>

            <div className="a_widgets">
              <Single empData = {empData} />
            </div>
          </>
        }
        

      </div>

    </div>
  )
}
