import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate } from "react-router-dom";
import { selectLoggedUser } from "../authSlice";
import { useEffect } from "react";
import { selectUserInfo } from "../../user/userSlice";


function Protected({children}) {
    const navigate = useNavigate();
    const user = useSelector(selectUserInfo);
    useEffect(()=>{

const token = localStorage.getItem('token');
if(!token){
    navigate('/login')
}

    },[navigate])


    return children;
}

export default Protected;