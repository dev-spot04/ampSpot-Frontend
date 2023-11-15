import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ALL_LINKS } from '../constants/navigation-routes';

const LoginCheckerHOC = (WrappedComponent) => {
  const WithAuthHOC = (props) => {

    const {isAuthenticated}=useSelector(state=>state.user);
    if (isAuthenticated) {
      return <Navigate to={ALL_LINKS.Dashboard.pageLink} />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthHOC;
}

export default LoginCheckerHOC