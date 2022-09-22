import {Route, Routes} from "react-router-dom";

import {HomePage, Navbar, Search} from "../../uiGeneral";
import { DriversPage, DriverInfo } from "../../drivers/";
import {LoginPage} from "../../auth/index.js";

export const DriversRoutes = () => {
    return(
        <>
            <Navbar />
            {/*<div className="card-panel">*/}
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="drivers" element={<DriversPage />}></Route>

                    <Route path="driver/:driverId" element={<DriverInfo />}></Route>
                    <Route path="search" element={<Search />}></Route>

                </Routes>
            {/*</div>*/}
        </>
    )
}