import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({ children }) =>{
debugger
    const { authState } = useContext(AuthContext);
    console.log(authState)

    return(authState.logged)
        ? <Navigate to="/drivers" />
        : children
}