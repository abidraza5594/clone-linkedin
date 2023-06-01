import React, { useState } from 'react';
import "./article.css"
import {useDispatch,useSelector} from "react-redux"
import { LoginDataAction } from '../../store/store';
import { toast } from 'react-toastify';



const ArticleModal = () => {
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  

  const isarticleopen=useSelector(state=>state.isArticlePostOpen)
  const defaultuserprofile=useSelector(state=>state.profileData.initialprofiledata)
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log('Submitted:', {description, message });
    // Reset form fields
  
    setDescription('');
    setMessage('');
  
    
  };

  const SubmitArticlData=()=>{
    dispatch(LoginDataAction.AddArticlePost({  description, message }))
    dispatch(LoginDataAction.CloseArticle())
    toast.success("Post Added Successfully!", {
        position: toast.POSITION.TOP_RIGHT
    });
  }

  return (
    <div>
      {isarticleopen && (
        <div className="modal">
            
          <div className="modal-content">
          <span className='clodearticlemodal' style={{cursor:"pointer"}} onClick={()=>dispatch(LoginDataAction.CloseArticle())}>X</span>
            <span className="close" onClick={()=>dispatch(LoginDataAction.OpenArticle())}>
              &times;
            </span>

            <form onSubmit={handleSubmit}>
              <label>Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              {/* <label>Photo URL:</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                required
              /> */}

              <button type="submit" onClick={SubmitArticlData}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleModal;
