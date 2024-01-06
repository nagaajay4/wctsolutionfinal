import React from 'react'
// import Homepage from '../components/Homepage'
// import LoginForm from '../components/Login/LoginForm'
// import LoginPage from '../components/Login/LoginPage'
// import LoginPageMUI from '../components/Login/LoginPageMUI'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
// import Sidebarusing from '../layouts/Sidebarusing'
// import Footer from '../layouts/Footer'
// import ParseCSVData from '../components/ParseCSVData'
import FileUpload from '../components/FileUpload'
// import Navbar from '../components/Rides/Navbar'
// import HeaderMusic from '../layouts/HeaderMusic'
import { Route,Routes } from 'react-router-dom'
import AppLogin from '../components/AppLogin' 
import DriverDetails from '../components/DriverDetails'
import TableComponent from '../components/TableComponent'
import UpComingRides from '../components/UpComingRides'
import Modalpopup from '../components/Modalpopup'


function Routings() {
  return (
    <>
    <div>
      <Routes>
        
        <Route path='/' element={<AppLogin />}></Route>
        <Route path='/Header' element={<Header />} />
        <Route path='/Modalpopup' element={<Modalpopup />} />
        <Route path='/FileUpload' element={<FileUpload />}></Route>
        <Route path='/DriverDetails' element={<DriverDetails />}></Route>
        <Route path='/UpComingRides' element={<UpComingRides />}></Route>

        <Route path='/TableComponent' element={<TableComponent />}></Route>


        {/* <Route path="/" element={<Homepage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/LoginPage' element={<LoginPage />}></Route>
        <Route path='/LoginPageMUI' element={<LoginPageMUI />}></Route>
        <Route path='/ParseCSVData' element={<ParseCSVData />} ></Route>
        <Route path='/FileUploadPage' element={<FileUploadPage />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/HeaderMusic' element={<HeaderMusic />}></Route> */}
      </Routes>
      
      {/* <HomePage></HomePage> */}
      {/* <RecommendationPage></RecommendationPage> */}
      {/* <RecommendationTable></RecommendationTable> */}
    </div></>
  )
}

export default Routings