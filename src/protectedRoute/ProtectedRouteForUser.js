import { Navigate } from "react-router-dom";

const ProtectedRouteForUser = ({children}) => {
  const user = JSON.parse(localStorage.getItem("users"));
  console.log(user);

  if(user?.role === "user"){
    return children;
  }
  else{
    return <Navigate to={'/login'}/>
  }
}

export default ProtectedRouteForUser;