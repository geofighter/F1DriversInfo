
import { useFetch } from "../../uiGeneral/hooks";
import { DriverCard } from "../../drivers/components/";
import {useMemo} from "react";


export const DriverList = () =>{

    const { data, isLoading, hasError } = useFetch("http://ergast.com/api/f1/current/drivers.json");
    useMemo( () => data, [ isLoading ] );
    let { Drivers: drivers } = !!data && data.MRData.DriverTable;
    let driversInfo = !!drivers && Object.values(drivers);

    return(
        <>
            <ol>
                {
                    driversInfo ?
                        (

                            driversInfo.map( driver => (
                                <div className="col s10 push-s2 m12 l6 xl4 animate__animated animate__fadeIn" key={ driver.permanentNumber }>
                                    <DriverCard
                                        key={ driver.permanentNumber }
                                        { ...driver }
                                    />
                                </div>
                            ))
                        )
                        :
                        (
                            <div className="center"><h5>No se encontraron datos, revisa la petición a la API</h5></div>
                        )
                }
            </ol>
        </>
    )

}