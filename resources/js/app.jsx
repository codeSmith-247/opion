import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Error} from './components/';

import App from './components/App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
;

