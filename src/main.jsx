import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import {DriversApp} from "./DriversApp";
import './assets/styles.css'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <BrowserRouter>
          <DriversApp />
      </BrowserRouter>
  // </React.StrictMode>
)
