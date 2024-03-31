import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


const LandingScreen = () => {
  return (
    <div>
        <Outlet>
            {/* The rest of your app goes here */}
        </Outlet>
    </div>
  )
}

export default LandingScreen