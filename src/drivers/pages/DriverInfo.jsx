import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../../uiGeneral/index.js";
import {useMemo} from "react";

export const DriverInfo = ({ query }) => {

    debugger
    const { driverId } = useParams();
    const { data, isLoading, hasError } = useFetch(`http://ergast.com/api/f1/current/drivers/${ driverId ? (driverId) : (query)  }/driverStandings.json`);
    useMemo( () => data, [ driverId ] ) ;
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (data != null){
        if(data.MRData.total === '0'){
            return (<div className="card-panel animate__animated animate__fadeIn"><h3><i className="material-icons left small red-text">error</i>"{ driverId ? (driverId):(query) }" Not Found</h3></div>)
        }
        else{
            const { Constructors, Driver, points, position, wins } = !!data ? (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]) : null;
            const { code, dateOfBirth, familyName, givenName, nationality, permanentNumber, url} = !!data ? (Driver) : null;
            const { name, nationality: nationalityConstructor, url: urlConstructor } = !!data ? (Constructors[0]) : null;

            if( isLoading == true){
                return (
                    <div className="card-panel animate__animated animate__fadeIn"><h3>Cargando Información del píloto</h3></div>
                )
            }
            else{

                return(
                    <div className="card-panel animate__animated animate__fadeIn">
                        {
                            driverId ?
                                (<button className="left btn accent-color white-text"
                                         onClick={onNavigateBack}
                                >
                                    <b><i className="material-icons left">arrow_back</i> Back</b>
                                </button>):''
                        }

                        <br/>
                        <div className="center">
                            <h3 className=""><i className="material-icons small">person</i> { Driver ? ( givenName + ' ' + familyName ) : ''} </h3>
                            <img className="responsive-img border-radius-custom" src={`../../../src/assets/drivers-imgs/${code}.jpg`} />
                        </div>

                        <div className="card-panel accent-color white-text center animate__animated animate__backInUp">
                            <ul>
                                <h5>Driver Info</h5>
                                <hr/>
                                <li><b>Permanent Number: </b> <span className="center-align chip white red-text driver-number"><b>{ Driver ? ( code + ' ' + permanentNumber ) : ''  }</b></span></li>
                                <li><b>Nationality: </b> { Driver ? ( nationality ) : '' }</li>
                                <li><b>Date of Birth: </b>{ Driver ? (dateOfBirth) : '' }</li>
                                <li><b>More Info: </b><a className="truncate" target="_blank" href={ url }>{ Driver ? ( url ) : '' }</a></li>
                            </ul>
                            <ul>
                                <h5>Driver Standing</h5>
                                <hr/>
                                <li><b>Total Points: </b><span className="chip red white-text"><b>{ points ? ( points ) : '' }</b></span></li>
                                <li><b>Position on Championship: </b><span className="chip red white-text"><b>{ position ? ( position ) : '' }</b></span></li>
                                <li><b>Wins on this Season: </b><span className="chip red white-text"><b>{ wins ? ( wins ) : '' }</b></span></li>
                            </ul>
                            <ul>
                                <h5>Constructor</h5>
                                <hr/>
                                <li><b>Constructor: </b>{ Constructors ? ( name ) : '' }</li>
                                <li><b>Nationality: </b>{ Constructors ? ( nationalityConstructor ) : ''}</li>
                                <li><b>About of Constructor: </b><a className="truncate" target="_blank" href={ urlConstructor }>{ Constructors ? ( urlConstructor ) : '' }</a></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    }

}