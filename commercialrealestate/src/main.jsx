import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//Rootlayout
import RootLayout from '../src/RootLayout/RootLayout'

//Pages
import HomePage from './components/HomePage/HomePage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'

import { Route,createBrowserRouter,RouterProvider, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<HomePage />}/>
      <Route path='about-us' element={<AboutUs />}/>
      <Route path='contact-us' element={<ContactUs />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
