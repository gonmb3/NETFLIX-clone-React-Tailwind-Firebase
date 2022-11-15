import { Navigate } from "react-router-dom"
import { useNetflixContext } from "../context/netflixProvider"

const ProtectedRoutes = ({ children }) => {
  const { user } = useNetflixContext();

  if (!user) {
    return <Navigate to="/" />
  } else {
    return children
  }

}

export default ProtectedRoutes