import { useEffect} from "react";
import { useOutletContext } from "react-router";
import type { IOutletContext } from "../layouts/AuthLayout";

export default function ResetPasswordPage(){
 
    const {setPageTitle} = useOutletContext<IOutletContext>();

    useEffect(() =>{
        setPageTitle({
            title: "Namaste!! Welcome to Password Reset Page",
            subtitle: "Use OTP to create new password.."
        })
    },[])
    return(
        <>
        {/* Right Side - Reset Password Panel */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-8 py-12">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-teal-800 mb-5 text-center">Reset Password</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="resetCode" className="block text-sm font-medium text-gray-700 mb-1">Reset Code</label>
                        <input
                            type="text"
                            id="resetCode"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            placeholder="Enter the reset code sent to your email"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            placeholder="Enter new password"
                            autoComplete="new-password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            placeholder="Confirm new password"
                            autoComplete="new-password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition mt-2"
                    >
                        Reset Password
                    </button>
                </form>
                <div className="flex justify-between mt-4 text-sm">
                    <a href="/" className="text-teal-600 hover:underline">Back to Login</a>
                    <a href="/register" className="text-teal-600 hover:underline font-medium">Need an account? Register</a>
                </div>
            </div>
        </div>
        </>
        );
}