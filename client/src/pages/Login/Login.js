import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {useContext,useState} from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
const [credentails, setCredentails] = useState({
    username: undefined,
    password: undefined,
});

const { loading, error, dispatch } = useContext(AuthContext);
const handleChange = (e)=>{
    setCredentails(prev =>({...prev, [e.target.id]: e.target.value}));
}

const navigate = useNavigate()

const handleClick = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
        const res = await axios.post("/auth/login",credentails);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        navigate("/");
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data});


    }
};


return (
    <div className="login">
    <div className="lContainer">
        <input
        className="lInput"
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
        />
        <input
        className="lInput"
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        />
        <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
        {error && <span>{error.message}</span>}
    </div>
    </div>
);
};

export default Login;
