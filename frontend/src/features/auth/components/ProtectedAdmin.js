import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate } from "react-router-dom";
import { selectLoggedUser } from "../authSlice";
import { selectUserInfo } from "../../user/userSlice";


function ProtectedAdmin({children}) {
const user = useSelector(selectUserInfo);

if(!user){
    return <Navigate to={"/login"} replace={true}></Navigate>;
}
if(user && user.role!== 'admin')
{
    return <Navigate to={'/'} replace={true}></Navigate>;
}
return children;
}

export default ProtectedAdmin;