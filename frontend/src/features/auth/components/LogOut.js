import { useEffect } from "react";
import { selectLoggedUser, signOutAsync } from "../authSlice";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function LogOut() {

    const dispatch = useDispatch();
    const user = useSelector(selectLoggedUser);
    useEffect(()=>{
        dispatch(signOutAsync(user.id));
    })
    return <>{!user && <Navigate to={"/login"} replace={true}></Navigate>}</>;
}

export default LogOut;