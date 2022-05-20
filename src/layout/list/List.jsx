import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './list.scss'

const List = () => {
  return (
      <div>
          <div className="list">
            <Sidebar/>
            <div className="listContainer">
              <Navbar />
              <Datatable/>
            </div>
          </div>
      </div>
  )
}

export default List
