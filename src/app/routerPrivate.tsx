import { Navigate } from "react-router";

const DashbordPrivate = ({ user, children }:any) => {
    if (!user) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
};

const PerfilPrivate = ({ user, children }:any) => {
  if (!user) {
    return <Navigate to="/perfil" replace />;
  }
  return children;
};

export default{ DashbordPrivate, PerfilPrivate}