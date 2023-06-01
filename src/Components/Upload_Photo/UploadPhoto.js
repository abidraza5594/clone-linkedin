import React, { useState } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { LoginDataAction } from '../../store/store';

const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState('');


  const dispatch=useDispatch()

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(LoginDataAction.UploadPhoto({title,selectedImage,}))    
  };
  const isopen=useSelector(state=>state.uploadphoto.isopen)

  return (
    <div>

      {isopen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Upload Image</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />

              {selectedImage ? (
                <>
                  <p>Selected Image:</p>
                  <img src={selectedImage} alt="Uploaded" className="uploaded-image" />
                </>
              ) : (
                <>
                  
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.djrHhPrOVynppSdGJ2dtPgHaHa&pid=Api&P=0&h=180"
                    alt=""
                    className="default-image"
                    onClick={() => document.getElementById('image-upload').click()}
                  />
                </>
              )}

              <input
                type="file"
                accept="image/*"
                id="image-upload"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />

              <button type="submit" >Submit</button>
              <button onClick={()=>dispatch(LoginDataAction.isUploadphotoOpen())}>Close </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;
