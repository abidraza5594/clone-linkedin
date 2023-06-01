import React from 'react'
import "./feed.css"
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from '../Post/Post';
import { useState } from 'react';
import ArticleModal from '../write_Article_Modal/ArticleModal';
import {useSelector,useDispatch} from "react-redux"
import { LoginDataAction } from '../../store/store';
import UploadPhoto from '../Upload_Photo/UploadPhoto';
// import { toast } from 'react-toastify';



function Feed() {
    const [input,setInput]=useState()
    const submitPost=(e)=>{
        e.preventDefault()
        setInput("")
    }

    const dispatch=useDispatch()
    const isopenarticlemodel=useSelector(state=>state.isArticlePostOpen)

    const AllArticle=useSelector(state=>state.articlepost)
    const reversedArray = [];
    for (let i = AllArticle.length - 1; i >= 0; i--) {
        reversedArray.push(AllArticle[i]);
    }

    // -------------------------------- upload image-----------------------

    const uplodedimage=useSelector(state=>state.uploadphoto.uploadimagedata)
    const defaultuserprofile=useSelector(state=>state.profileData.initialprofiledata)

    return (
        <div className="feed">
            <UploadPhoto/>
            {isopenarticlemodel && <ArticleModal/>}
            
            <div className="feed__input">
                <div className="feed__form">
                    <Avatar src="https://tse2.mm.bing.net/th?id=OIP.ewRfMU-58Iustx-NiDinuAHaEo&pid=Api&P=0&h=180" />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='start a post' value={input} onChange={e=>setInput(e.target.value)} />
                        <input type="submit" />
                    </form>
                </div>

                <div className="feed__options">
                    <div className="options" onClick={()=>dispatch(LoginDataAction.isUploadphotoOpen())}>
                        <InsertPhotoIcon style={{ color: "#70b5f9" }} />
                        <span>Photo</span>
                    </div>

                    <div className="options">
                        <YouTubeIcon style={{ color: "#7fc15e" }} />
                        <span>Video</span>
                    </div>

                    <div className="options">
                        <CalendarMonthIcon style={{ color: "#e7a33e" }} />
                        <span>Event</span>
                    </div>

                    <div className="options" onClick={()=>dispatch(LoginDataAction.OpenArticle())}>
                        <AssignmentIcon style={{ color: "#fc9295" }} />
                        <span>Write Article</span>
                    </div>

                </div>
            </div>
            {uplodedimage.length>0 ? uplodedimage.map(image=>
            <Post description={image.title} 
            pohotoUrl={image.photoURL}/>
                
            ) :""}
            {reversedArray.map((post)=>
            <Post name={defaultuserprofile.name} description={post.description} message={post.message} 
            pohotoUrl={defaultuserprofile.image}/>
            )}
            <Post name='abid ansari' description='this s test' message='we are learning react js' 
            pohotoUrl='https://tse3.mm.bing.net/th?id=OIP.54YsinXuHndURnL8ENHe8gHaEo&pid=Api&P=0&h=180'/>
            
            <Post name='aman pandey' description='this s test' message='this is a test message' 
            pohotoUrl='https://lh3.googleusercontent.com/a/AAcHTtcN4nY29mzVoDgZ44wGtUAxXYhTCphUDf2bZEiN=s83-c-mo'/>

            <Post name='arif' description='hello i am python developer' message=' i am looking for a jon change based on python django' 
            pohotoUrl='https://assets.leetcode.com/users/avatars/avatar_1673852875.png'/>

            
            <Post name='anil' description='hello i am video editor' message=' i am looking for a jon change based on video editing' 
            pohotoUrl='https://assets.leetcode.com/users/avatars/avatar_1673852875.png'/>
            
            
        </div>
    )
}

export default Feed