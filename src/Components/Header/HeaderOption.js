import React from 'react'
import { Avatar } from '@mui/material'
import {useSelector} from "react-redux"
function HeaderOption({Icon,title,avatar}) {
  const defaultuserprofile=useSelector(state=>state.profileData.initialprofiledata)

  return (
    <div className="header__options">
        {Icon && <Icon></Icon>}
        {avatar && <Avatar src={defaultuserprofile.image} name={avatar}/>}
        <span>{title}</span>
    </div>
  )
}

export default HeaderOption