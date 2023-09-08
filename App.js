import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './src/components/Header'
import Body from './src/components/Body'
import About from './src/components/about'
import Contact from './src/components/Contact'
import { Outlet } from 'react-router-dom'
import Error from './src/components/Error'
import RestaurentMenu from './src/components/RestaurentMenu'


const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurent/:resID',
                element:<RestaurentMenu/>
            }
        ],
        errorElement:<Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)

// root.render(<AppLayout/>);

