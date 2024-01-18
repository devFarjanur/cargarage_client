

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
