import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../context";

export const LoginPage = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath');
        let route = "";
        if(lastPath){
            route = lastPath;
        }
        else{
            route = '/drivers'
        }

        login( 'Marcos Geo' );

        navigate(route, {
            replace: true
        });
    }

    return(
        <div className="card-panel">
            <h3 className="center"> Login </h3>
            <hr/>

            <div className="card-panel">
                <p>This is a simple app that shows general information of F1 drivers of the season <b>2022</b></p>
                <div className="center">
                    <button
                        className="btn-floating pulse hoverable red white-text"
                        onClick={ onLogin }
                    >
                        <i className="material-icons">vpn_key</i>
                    </button>
                </div>
            </div>
        </div>
    )
}