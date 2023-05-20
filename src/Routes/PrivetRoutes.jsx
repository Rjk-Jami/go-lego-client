import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const PrivetRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)
// loader for privet page reload
    if(loading){
        return <div className="flex justify-center"><progress className="progress w-full container"></progress>
        </div>
    }
    // privet page secret
    if(user){
        return children
    }
    return <Navigate to='/login' replace={true} state={{from: location}}></Navigate>
};

export default PrivetRoute;