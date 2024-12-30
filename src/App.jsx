import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './component/Navbar'
import Footer from './component/Footer'


function App() {
  return (
    <div className='mx-4 sm:mx-[10%] '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctor' element={<Doctor />}/>
        <Route path='/doctor/:speciality' element={<Doctor />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<Myprofile />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/appointment/:doctorId' element={<Appointments />}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App