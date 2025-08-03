import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import  HomeLayout from '../Layout/HomeLayout'
import Aboutus from '../pages/Aboutus'
import Services from '../pages/Services'
import FAQs from '../pages/FAQs'
import Contact from '../pages/Contact'
import Careers from '../pages/Careers'
import Apply from '../pages/Apply'

export const MyRouter = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayout/>,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/about_us", element: <Aboutus /> },
            { path: "/services", element: <Services /> },
            { path: '/faqs', element: <FAQs /> },
            { path: "/contact", element: <Contact /> },
            { path: '/careers', element: <Careers /> },
            {path:"/apply", element:<Apply/>}
        ]
    }
])
