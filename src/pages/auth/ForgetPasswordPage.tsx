import { useEffect} from "react";
import { useOutletContext } from "react-router";
import type { IOutletContext } from "../layouts/AuthLayout";

export default function ForgetPasswordPage(){
const {setPageTitle} = useOutletContext<IOutletContext>();

    
    useEffect(() =>{
        setPageTitle({
            title: "Namaste!!",
            subtitle: "Provide your email address to send you 6 digit authentication code."
        })
    },[])

    return(
    <>
    {/* Right Side - Login Panel */}
    <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-8">
            <h2 className="text-2xl font-bold text-teal-800 mb-5 text-center">Forgot Password</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        placeholder="you@email.com"
                        autoComplete="email"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition mt-2"
                >
                    Send Reset Link
                </button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
                <a href="/" className="text-teal-600 hover:underline font-medium">Back to Login</a>
                <a href="/register" className="text-teal-600 hover:underline font-medium">Don't have account? Register</a>
            </div>
        </div>
    </div>
    </>
    );
}