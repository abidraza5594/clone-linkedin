import React from 'react';
import Header from './Components/Header/Header';
import SidBar from './Components/SideBar/SidBar';
import Feed from './Components/Feed/Feed';
import Widget from './Components/Widget/Widget';
import EditProfile from './Components/EdirProfile/Editprofile';
import {useSelector} from "react-redux"


function App() {
  const isopenprofile=useSelector(state=>state.profileData.isopenprofile)

  return (
    <div className="app_wrapper">
      <Header/>
      <div className="app_body">
        {!isopenprofile && <SidBar/>}
        {!isopenprofile &&<Feed/>}
        {!isopenprofile &&<Widget/>}
        {isopenprofile && <EditProfile/>}
      </div>
    </div>
  );
}

export default App;
