import {Route, Routes} from "react-router-dom";
import { LoginPage } from "../auth/";
import {DriversRoutes} from "../drivers";
import {PrivateRoute, PublicRoute} from "../router";


export const AppRouter = () => {

    return(
        <>
            <div className="card-panel">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/*"
                        element={
                            <PrivateRoute>
                                <DriversRoutes />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </>
    )

}