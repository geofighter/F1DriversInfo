import {Route, Routes} from "react-router-dom";

import { HomePage, Navbar } from "../uiGeneral/";
import { LoginPage } from "../auth/";
import {DriversRoutes} from "../drivers";


export const AppRouter = () => {

    return(
        <>
            {/*<Navbar />*/}
            <div className="card-panel">
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="/*" element={<DriversRoutes />}></Route>
                </Routes>
            </div>
        </>
    )

}