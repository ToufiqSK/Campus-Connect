import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
const appRouter = createBrowserRouter(
    [
        
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        }
    ]
)
const Body = () => {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
