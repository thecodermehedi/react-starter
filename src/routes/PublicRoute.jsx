import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
import {useContext} from "react";
import Loading from "../components/Loading/Loading";

const PublicRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;