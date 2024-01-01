import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate } from "react-router-dom";
import { selectLoggedUser } from "../authSlice";


function Protected({children}) {
const user = useSelector(selectLoggedUser);

if(!user){
    return <Navigate to={"/login"} replace={true}></Navigate>;
}
return children;
}

export default Protected;