
import React from 'react'
import { Col } from 'react-bootstrap'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Chart_atten from '../../components/widget/Chart_atten'
import Widget from '../../components/widget/Widget'
import Widgets from '../../components/widget/Widgets'
import Single from '../single/Single'
import "./home.scss"
//import Unity, { UnityContext } from "react-unity-webgl";

// const unityContext = new UnityContext({
//   loaderUrl: "Build/Meta_prototype_WebGL1.loader.js",
//   dataUrl: "Build/Meta_prototype_WebGL1.data",
//   frameworkUrl: "Build/Meta_prototype_WebGL1.framework.js",
//   codeUrl: "Build/Meta_prototype_WebGL1.wasm",
// });


export default function Home() {

  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
          {/* <Unity className='unity' unityContext={unityContext}/> */}
        </div>
        <div className="a_widgets">
          <Col xxl={6} xs={6}>
            <Widget/>
          </Col>
          <Col xxl={6} xs={6}>
            <Chart_atten />
          </Col>
        </div>

        <div className="a_widgets">
          <Single />
        </div>
      </div>

    </div>
  )
}
