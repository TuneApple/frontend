import { Route, Routes} from 'react-router-dom'
import {useContext} from "react";
import {AuthContext} from "../context";
import {privateRoutes, publicRoutes} from "./routers";



const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route element={route.element}
                           path={route.path}
                           key={route.path}


                    />
                )}
            </Routes>
            :
            <Routes>

                {publicRoutes.map(route =>
                    <Route element={route.element}
                           path={route.path}
                           key={route.path}
                    />
                )}
            </Routes>
    );
};


export default AppRouter;
