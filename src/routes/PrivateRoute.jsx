import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(loading, user);
    if(loading){
        return <Loading></Loading>
    }
    if(user ){
        // console.log(children);
        return children
    }
    
    return <Navigate state={{id: location.pathname[location.pathname.length-1]}}  to={'/login'}></Navigate>
    
};

export default PrivateRoute;