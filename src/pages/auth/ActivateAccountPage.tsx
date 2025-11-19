import { useEffect} from "react";
import { useOutletContext, useSearchParams } from "react-router";
import type { IOutletContext } from "../layouts/AuthLayout";
import { useParams } from "react-router";

export default function ActivateAccountPage(){

    const params = useParams()

    const [query, setQuery] = useSearchParams()
    console.log(params.token)
    console.log(query.get('username'))
    useEffect(()=>{
        setTimeout(()=>{
            setQuery({
                username:"test@gmail.com",

            })
        },3000)

    },[])

    
    const {setPageTitle} = useOutletContext<IOutletContext>();
    useEffect(() =>{
        setPageTitle({
            title: "Namaste!! Please activate your account",
            subtitle: "Enter code sent to your mail inorder to activate your account"
        })
    },[])
    
    return(
    <>
    {/* Right Side - Activation Panel */}
    <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-8">
            <h2 className="text-2xl font-bold text-teal-800 mb-5 text-center">Activate Account</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <label htmlFor="activationCode" className="block text-sm font-medium text-gray-700 mb-1">Activation Code</label>
                    <input
                        type="text"
                        id="activationCode"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        placeholder="Enter the code sent to your email"
                        autoComplete="off"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition mt-2"
                >
                    Activate Account
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