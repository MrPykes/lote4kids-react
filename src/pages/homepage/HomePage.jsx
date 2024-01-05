import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Content from '../../components/content/Content'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import "./homepage.css"

const HomePage = () => {
  return (
    <>
      <div className='home'>
      <Topbar />
        <div className="homeWrapper">
          <div className="homeContainer">
            <Content className="homeContent" />
            <Sidebar className="homeSidebar" />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
