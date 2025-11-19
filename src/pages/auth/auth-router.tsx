import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import ForgetPasswordPage from "./ForgetPasswordPage"
import ActivateAccountPage from "./ActivateAccountPage"
import ResetPasswordPage from "./ResetPasswordPage"
import AuthLayoutPage from "../layouts/AuthLayout"

export const AuthRouter = [
    { path: "/", element: <AuthLayoutPage/> , children: [
        {index : true, Component: LoginPage},
        {path:"/register", element: <RegisterPage/>},
        {path:"/forget-password", Component: ForgetPasswordPage},
        {path:"/reset-password", Component: ResetPasswordPage},
        {path:"/activate/:token", Component: ActivateAccountPage},
    ]},
        
];