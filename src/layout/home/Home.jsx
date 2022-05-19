import React from 'react'
import { Col } from 'react-bootstrap'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Chart_atten from '../../components/widget/Chart_atten'
import Widget from '../../components/widget/Widget'
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
          <Col xxl={5}>
            <Widget/>
          </Col>
          <Col xxl={4}>
            <Chart_atten />
          </Col>
          {/* <Unity className='unity' unityContext={unityContext}/> */}
        </div>
      </div>

    </div>
  )
}
