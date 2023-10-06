import PropTypes from "prop-types";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
import {useContext} from "react";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
