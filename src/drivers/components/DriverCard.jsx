
import {DriverInfo} from "../pages";
import {Link} from "react-router-dom";

export const DriverCard = ({ driverId ,code, dateOfBirth, familyName, givenName, nationality, permanentNumber, url } ) => {

    return(
        <>
            <div className="card-panel card-driver accent-color card-item hoverable">
                <h5 className="center white-text">{ givenName + " " +familyName }</h5><hr/>
                <div className="center">
                    <img className="responsive-img border-radius-custom" src={`../../../src/assets/drivers-imgs/${code}.jpg`} />
                </div>
                <div className="card red white-text">
                    <div className="container center">
                        <ul>
                            <br />
                            <li><b>Number:</b> <span className="chip accent-color yellow-text driver-number"><b>{ permanentNumber }</b></span></li>
                            <li><b>Date of Birth:</b> { dateOfBirth }</li>
                            <li><b>Nationality:</b> { nationality }</li>
                            <li>Info: <a className="truncate urls" href={ url } target="_blank">{ url }</a></li>
                            <br/>
                        </ul>
                        <div>
                            <Link className="btn-floating accent-color pulse" to={`/driver/${driverId}`}>
                                <i className="material-icons">assignment_ind</i>
                            </Link>
                        </div>
                        <br/>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}