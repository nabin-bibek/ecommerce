import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, signOutAsync } from "../../user/userSlice";
import { logOut } from "../authSlice";

function LogOut() {
  const  navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUserInfo);
    useEffect(()=>{
        localStorage.removeItem('token');
        dispatch(logOut());
        dispatch(signOutAsync());
    },[navigate]);
    return <>{!user && <Navigate to={"/login"} replace={true}></Navigate>}</>;
}

export default LogOut;