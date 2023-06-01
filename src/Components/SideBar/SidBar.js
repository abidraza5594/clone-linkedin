import React from 'react'
import "./sidbar.css"
import { Avatar } from '@mui/material'
import {useDispatch,useSelector} from "react-redux"
import { LoginDataAction } from '../../store/store';

function SidBar() {
    const dispatch=useDispatch()
    const defaultuserprofile=useSelector(state=>state.profileData.initialprofiledata)
    console.log(defaultuserprofile)
    
   
  return (
    <div className="sidebar">
        <div className="sidebar__profile">
            <img src={defaultuserprofile.backgroundImage} alt="" />
             
            <div className="profile__details">
                <div onClick={()=>dispatch(LoginDataAction.isopenProfile())}>
                    <Avatar src={defaultuserprofile.image}  style={{cursor:"pointer"}}/>
                    
                </div>
                <h4>{defaultuserprofile.name}</h4>
                <p>{defaultuserprofile.title}</p>
            </div>

            <div className="profile__stats">
                <span>who viewed your profile</span>
                <span className="stat__number">20</span>
            </div>

            <div className="profile__stats">
                <span>Connection <br/><b>Grow Your Network</b></span>
                <span className="stat__number">115</span>
            </div>
        </div>

        <div className="sidebar__recent">
            <p>Recent</p>
            <p className="hash"><span>#</span> <span className='course'>Branding</span></p>
            <p className="hash"><span>#</span> <span className='course'>Marketing</span></p>
            <p className="hash"><span>#</span> <span className='course'>web developing</span></p>
            <p className="hash"><span>#</span> <span className='course'>react</span></p>
            <p className="hash"><span>#</span> <span className='course'>html & css</span></p>
            <p className="hash"><span>#</span> <span className='course'>Python</span></p>
        </div>
    </div>
  )
}

export default SidBar