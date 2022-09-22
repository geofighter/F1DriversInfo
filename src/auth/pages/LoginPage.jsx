import {useNavigate} from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/drivers', {
            replace: true
        });
    }

    return(
        <div className="card-panel">
            <h3 className="center"> Login </h3>
            <hr/>

            <div className="card-panel">
                <p>Hola, aqui va el formulario de autenticación</p>
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