import Home from "../pages/Home";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";
import Registry from "../pages/Registry";
import CategoryPage from "../pages/Category";


export const privateRoutes = [
    { path: '/', element: <Home/>},
    { path: '*', element: <Navigate to="/"/>},


]

export const publicRoutes = [
    { path: '/category', element: <CategoryPage/>},
    { path: '/login', element: <Login/>},
    { path: '/registry', element: <Registry/>},
    { path: '/', element: <Home/>},
    { path: '*', element: <Navigate to="/"/>},

]