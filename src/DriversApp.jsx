import {AppRouter} from "./router/AppRouter";
import {AuthProvider} from "./auth";

export const DriversApp = () => {

    return(
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )

}