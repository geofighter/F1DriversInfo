import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";

import {useForm} from "../hooks/useForm.js";

import {DriverInfo} from "../../drivers";

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const { driverId, onInputChange } = useForm({
        driverId: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if( driverId.trim().length <= 1 ) return;

        navigate(`?q=${ driverId.toLowerCase().trim() }`)

    }

    return (
        <div className="row">
            <h3 className="center"> <i className="material-icons small">search</i> Search a Driver </h3>
            <hr/>
            <form onSubmit={ onSearchSubmit } className="accent-color white-text hoverable col s12 m12 l4 xl4 card-panel animate__animated animate__bounceInLeft">
                <div className="row">
                    <div className="input-field col s12 m12 l12 xl12">
                            <label htmlFor="search_driver">
                                Type a Driver with Surname
                            </label>
                        <input
                            id="search_driver"
                            type="text"
                            className="validate white-text"
                            name="driverId"
                            value={ driverId }
                            onChange={ onInputChange }
                        />
                        <div className="center">
                            <button className="btn-floating white "><i className="red-text material-icons">search</i></button>
                        </div>
                    </div>
                </div>
            </form>

            <div className="col s12 m12 l8 xl8 animate__animated animate__bounceInRight">
                <DriverInfo query={q}/>
            </div>
        </div>

    )
}