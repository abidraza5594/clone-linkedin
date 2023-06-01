import React from 'react'
import "./post.css"
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch,useSelector} from "react-redux"
import { LoginDataAction } from '../../store/store';

function Post({name,description,message,pohotoUrl}) {
    const like = useSelector(state=>state.like)
    const dispatch=useDispatch()
    const LikeHandler=()=>{
        dispatch(LoginDataAction.AddLike())
    }
  return (
    <div className="post">
        <div className="post__header">
            <div className="post__header__left">
                <Avatar src={pohotoUrl}/>
                <div className="post__profile__details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <MoreVertIcon/>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__footer">
            <div className="post__footer__option">
                <ThumbUpIcon onClick={LikeHandler}/>
                <span >{like<=0? "Like":like}</span>
            </div>

            <div className="post__footer__option">
                <CommentIcon/>
                <span>Comments</span>
            </div>

            <div className="post__footer__option">
                <ShareIcon/>
                <span>Shere</span>
            </div>

            <div className="post__footer__option">
                <SendIcon/>
                <span>Send</span>
            </div>

        </div>
    </div>
  )

}

export default Post