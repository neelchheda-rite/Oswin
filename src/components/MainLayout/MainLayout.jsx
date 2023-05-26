import React from 'react'
import Topbar from "../common/Topbar/Topbar";
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import Sidebar from '../common/Sidebar/Sidebar';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import "./MainLayout.css";
import { ToastContainer } from 'react-toastify';
import {  Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Transactions from "../Transactions/Transaction";



const MainLayout = () => {
  
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
  
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        
        <ToastContainer position="top-right" pauseOnHover="false" autoClose={1500}/>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
