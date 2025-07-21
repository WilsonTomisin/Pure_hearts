import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import  HomeLayout from '../Layout/HomeLayout'
import Aboutus from '../pages/Aboutus'
import Services from '../pages/Services'

export const MyRouter = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayout/>,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/about_us", element: <Aboutus /> },
            { path:"/services", element:<Services/>}
        ]
    }
])
