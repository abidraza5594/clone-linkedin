import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import {useSelector} from "react-redux"

function Header() {
    const defaultuserprofile=useSelector(state=>state.profileData.initialprofiledata)
  return (
    <div className='header'>
        <div className="header_left">
            <div className="header__logo">
                <img src="https://tse4.mm.bing.net/th?id=OIP.8OUQAzOlhtNkOtZIHKd_lwHaHa&pid=Api&P=0&h=180" alt="" />
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input  type="text" placeholder='search' />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={PeopleAltIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption Icon={Avatar} title={defaultuserprofile.name}/>
        </div>
        
    </div>
  )
}

export default Header