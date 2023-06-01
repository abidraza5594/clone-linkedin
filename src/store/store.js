import {createSlice,configureStore} from "@reduxjs/toolkit"

const LoginDataSlice=createSlice({
    name:"logindata",
    initialState:{logindata:[],like:0,articlepost:[],isArticlePostOpen:false,
        uploadphoto:{uploadimagedata:[],isopen:false},
        profileData:{initialprofiledata:{name:"User8104",title:"User Title",
        image:"",
        backgroundImage:"https://tse3.mm.bing.net/th?id=OIP.1Wd11So0xosR8h5LQNwhigHaEo&pid=Api&P=0&h=180"},
        profile:[],isopenprofile:false}
    },
    reducers:{
        AddLoginData(state,action){
            state.logindata.push(action.payload)
        },
        AddLike(state){
            state.like=state.like+1
        },
        AddArticlePost(state,action){
            state.articlepost.push(action.payload)
        },
        OpenArticle(state){
            state.isArticlePostOpen=true
        },
        CloseArticle(state){
            state.isArticlePostOpen=false
        },
        UploadPhoto(state,action){
            state.articlepost.push(action.payload)
        },
        isUploadphotoOpen(state){
            state.uploadphoto.isopen=!state.uploadphoto.isopen
        },
        addProfileData(state,action){
            state.profileData.profile.push(action.payload)
        },
        isopenProfile(state){
            state.profileData.isopenprofile=!state.profileData.isopenprofile
        },
        upDateProfile(state,action){
            state.profileData.initialprofiledata=action.payload
        }
        

    }
})

const store = configureStore({reducer:LoginDataSlice.reducer})
export const LoginDataAction = LoginDataSlice.actions
export default store;