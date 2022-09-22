import { DriverList } from "../components/DriverList";

export const DriversPage = () => {

    const driversList = DriverList();

    return(
        <div className="card-panel">
            <div>
                <h3 className="center"><i className="material-icons small">art_track</i> F1 Drivers </h3>
            </div>
            <hr/>
            <div className="row">
                <DriverList/>
            </div>
        </div>
    )
}