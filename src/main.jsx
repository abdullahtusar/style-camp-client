import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // max-w-screen-2xl mx-auto
  <div className=''> 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
  ,
)
