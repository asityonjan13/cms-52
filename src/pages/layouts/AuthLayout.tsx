//Here Outlet, loginpage, register, resetpwdpage, activate leftsidebar are childs and AuthLayout is parent
//AuthLayoutPage to leftsidebar => use props for data transfer
//Loginpage to authlayout => use context or call back functions for data transfer

import { Outlet } from "react-router";
import React, { useState } from "react";
import AuthLeftSidePanel from "../../components/auth/LeftSidePanel"

export interface IOutletContext {
    setPageTitle: React.Dispatch<React.SetStateAction<{ 
        title: string; 
        subtitle: string 
    }>>;
}

const AuthLayoutPage = () => {
    const [pageTitle, setPageTitle] = useState({
        title: "Initial dummy data 1",
        subtitle: "Initial dummy data 2"
    }) 

    return (<>
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full bg-teal-50">
        {/* Left Side */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-teal-700 to-teal-900 flex flex-col items-center justify-center px-8 py-12">
            <AuthLeftSidePanel title={pageTitle.title}>
            <span className="text-[1.35rem] text-white ">{pageTitle.subtitle}</span>  
            </AuthLeftSidePanel>
        </div>
        {/* Right Side - Login Panel */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-8 py-12">
            <Outlet context={{setPageTitle}}/>
        </div>
    </div>
    </>
    );
}

export default AuthLayoutPage