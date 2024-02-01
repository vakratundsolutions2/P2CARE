import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {
    if (localStorage.getItem("ADMIN")) {
      return <Navigate to={"/admin"} />;
    } else {
      return children
    }
}

export default PublicRoute