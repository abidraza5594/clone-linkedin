import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import { LoginDataAction } from '../../store/store';


const EditProfile = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  const dispatch=useDispatch()
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleBackImageUpload = (event) => {
    const file = event.target.files[0];
    setBackgroundImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginDataAction.upDateProfile({name,title,image,backgroundImage}))
    dispatch(LoginDataAction.isopenProfile())
    
  };

  return (
    <div>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}

      {true && (
        <div className="edit-container">
          <span style={{marginLeft:"400px",fontSize:"large",cursor:"pointer"}}
          onClick={()=>dispatch(LoginDataAction.isopenProfile())}>X</span>
          <div className="inner-edit-content">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <br />
              <label>
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <br />
              <label>
                Background Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBackImageUpload}
                />
              </label>
              <br />
              <button type="submit" >Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
