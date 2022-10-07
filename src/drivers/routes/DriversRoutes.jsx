import {Route, Routes} from "react-router-dom";

import {Navbar, Search} from "../../uiGeneral";
import { DriversPage, DriverInfo } from "../../drivers/";

export const DriversRoutes = () => {
    return(
        <>
            <Navbar />
                <Routes>
                    <Route path="drivers" element={<DriversPage />}></Route>
                    <Route path="driver/:driverId" element={<DriverInfo />}></Route>
                    <Route path="search" element={<Search />}></Route>

                </Routes>
        </>
    )
}