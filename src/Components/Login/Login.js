import "./login.css"
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import { LoginDataAction } from "../../store/store";
import { useDispatch } from 'react-redux';


const Login = () => {
	const dispatch = useDispatch();
	const [email,setImail]=useState("")
	const [password,setPassword]=useState("")

	

	const navigate=useNavigate();

	const LoginHandler=(pwd)=>{
	
		if(pwd.match(/[^0-9a-z]/i)){
			toast.error("Only letters and digits allowed!", {
				position: toast.POSITION.TOP_RIGHT
			});
		
		}else if(!pwd.match(/\d/)){
			toast.error("At least one digit required!", {
				position: toast.POSITION.TOP_RIGHT
			});
		}else if(!pwd.match(/[a-z]/i)){
			toast.error("At least one letter required!", {
				position: toast.POSITION.TOP_RIGHT
			});
		}else{
			dispatch(LoginDataAction.AddLoginData({email,password}))
			navigate("/home")
			return true
		}
	}
	
  return (
	<div class="container">
		<h2>Linked<span>
			<i class="fab fa-linkedin"></i>
		</span></h2>
		<div class="text">
			<h1>Sign in</h1>
			<p>Stay updated on your professional world</p>
		</div>
		<div class="your-input">
			<div class="input">
				<input type="text" name="email" onChange={(e)=>setImail(e.target.value)}
					id="email" required />
				<label for="email">Email</label>
			</div>
			<div class="input">
				<input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}
					id="password" required />
				<label for="password">
					Password
				</label>
			</div>
			
		</div>
		<a href="#" class="forgot-password-link">
			Forgot Password?
		</a>
		<button onClick={()=>LoginHandler(password)} style={{cursor:"pointer"}}>Sign in</button>
		<ToastContainer />
		<p class="join-link">
			New to linkedin?
			<a href="#" class="join-now">
				Join now
			</a>
		</p>
	</div>

  );
};

export default Login;




