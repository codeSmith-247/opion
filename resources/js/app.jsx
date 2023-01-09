import './bootstrap';

import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Error, PageLoader} from './components/';

import {App, Facilities, Booking} from './pages/';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/facilities',
        element: <Facilities />,
        errorElement: <Error />

    },
    {
        path: '/booking',
        element: <Booking />,
        errorElement: <Error />

    },
])

const RootComponent = () => {
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        });
    }, []);  

    if(loading) {
        return <PageLoader />
    }
    else {
        return  <RouterProvider router={router} />
    }
    
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <RootComponent />
    </React.StrictMode>
)
;

