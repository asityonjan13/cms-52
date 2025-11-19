import {createBrowserRouter, RouterProvider } from "react-router";
import { NotFoundPage } from "../pages/errors/ErrorPage";
import { AuthRouter } from "../pages/auth/auth-router";
import { AdminRouter } from "../pages/admin/admin-router";


const routerConfig = createBrowserRouter([
    ...AuthRouter,
    ...AdminRouter,

    { path: "*", element: <NotFoundPage /> }
]);

const RouterConfig = () => {
    //path
    return (
        <>
            <RouterProvider router={routerConfig}/>
        </>
    );
}

export default RouterConfig