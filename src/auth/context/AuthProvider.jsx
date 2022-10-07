import {AuthContext} from "./AuthContext";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";
import {types} from "../types/types.js";

export const AuthProvider = ({ children }) => {

    const init = () =>{
        const user = JSON.parse(localStorage.getItem('user'));
        return {
            logged: !!user,
            user
        }
    }

    const [ authstate, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) =>{
        const user = {
            id: Math.random(),
            name
        }
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));
        dispatch( action );
    }

    const logout = () =>{
        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');
        dispatch( action );
    }

    return(
        <AuthContext.Provider value={{
            authState: authstate,
            login: login,
            logout: logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}