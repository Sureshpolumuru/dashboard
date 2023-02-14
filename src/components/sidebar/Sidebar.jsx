import React from 'react'
import "./Sidebar.scss";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo"> ADMIN DASHBOARD</span>
        </div>
        <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
            <DashboardIcon className='icon' />
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                <PermIdentityOutlinedIcon className='icon' />
                <span>Users</span>
            </li>
            <li>
                <ProductionQuantityLimitsIcon className='icon' />
                <span>Products</span>
            </li>
            <li>
                <BorderColorIcon className='icon' />
                <span>Orders</span>
            </li>
            <li>
                <DeliveryDiningIcon className='icon' />
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
            <QueryStatsIcon className='icon' />
                <span>Stats</span>
            </li>
            <li>
                <NotificationsOutlinedIcon className='icon' />
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
            <SettingsSystemDaydreamIcon className='icon' />
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon className='icon' />
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className='icon' />
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className='icon' />
                <span>Profile</span>
            </li>
            <li>
            <LogoutIcon className='icon' />
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
