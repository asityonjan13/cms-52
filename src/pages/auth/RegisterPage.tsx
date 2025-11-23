import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router";
import type { IOutletContext } from "../layouts/AuthLayout";
import { FormBothComponentControlBased, CancelButton,SubmitButton } from "../../components/form/FormElementComponent";
import { FormCheckboxControlBased } from "../../components/form/FormCheckboxComponent";
import { type IRegisterUserData, RegisterDTO } from "./auth.contract";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

  
export default function RegisterPage() {
    
    //form handling
    const { handleSubmit, control, formState:{errors, isSubmitting}} = useForm({
        defaultValues: {fname:"", email:"", password:"", confirmpassword:"",bday:"", phone:""},
        resolver: zodResolver(RegisterDTO),
        mode: 'onTouched',
    })

    const submitRegisterForm = (data: IRegisterUserData) => {
        console.log(data)
    }

    const { setPageTitle } = useOutletContext<IOutletContext>();
    
    // For hidden and visibility pswd option
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

    useEffect(() => {
        console.log('Component mounted');
        setPageTitle({
            title: "Namaste!! Register & Join with us..",
            subtitle: "Fill up the form to register as new user"
        })
    }, [setPageTitle]);
    
    return (
        <>
            {/* Right Side - Register Panel */}
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-6 py-8">
                <div className="w-full max-w-xl">
                    {/* Welcome Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-600 text-base">Join us and start your journey today</p>
                    </div>

                    {/* Register Card */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
                        {/* Decorative gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500"></div>
                        
                        <form onSubmit={handleSubmit(submitRegisterForm)} className="space-y-5">
                            {/* Full Name */}
                            <FormBothComponentControlBased
                                label = {{
                                    htmlFor: "fname",
                                    children: <>Full Name</>
                                }}
                                input = {{
                                    type: "text",
                                    name: "fname",
                                    control: control, 
                                    placeholder: "John Doe",
                                    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                }}
                                errorMessage = { errors?.fname?.message }
                            />
                            {/* Email */}
                            <FormBothComponentControlBased
                                label = {{
                                    htmlFor: "email",
                                    children: <>Email</>
                                }}
                                input = {{
                                    type: "email",
                                    name: "email",
                                    control: control, 
                                    placeholder: "you@examxple.com",
                                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                }}
                                errorMessage = { errors?.email?.message }
                            />

                            {/* Phone & Birthday Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* For phone number */}
                                <FormBothComponentControlBased
                                    label = {{
                                        htmlFor: "phone",
                                        children: <>Phone Number</>
                                    }}
                                    input = {{
                                        type: "tel",
                                        name: "phone",
                                        control: control, 
                                        placeholder: "9867564230",
                                        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    }}
                                    errorMessage = { errors?.phone?.message }
                                />
                                {/* For bday */}
                                <FormBothComponentControlBased
                                    label = {{
                                        htmlFor: "bday",
                                        children: <>Birth Date</>
                                    }}
                                    input = {{
                                        type: "date",
                                        name: "bday",
                                        control: control, 
                                        placeholder: "1996-04-01",
                                        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    }}
                                    errorMessage = { errors?.bday?.message }
                                />
                                
                            </div>

                            {/* Password */}
                            <FormBothComponentControlBased
                                label = {{
                                htmlFor: "password",
                                children: <>Enter Password</>
                                }}

                                input = {{
                                type: showPassword ? "text" : "password",
                                name: "password",
                                control: control, 
                                placeholder: "",
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                }}
                                errorMessage = { errors?.password?.message }
                                rightElement = {
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                }
                            />

                            {/* Confirm Password */}
                            <FormBothComponentControlBased
                                label = {{
                                    htmlFor: "confirmpassword",
                                    children: <>Re-Enter Password</>
                                }}

                                input = {{
                                    type: showConfirmPassword ? "text" : "password",  
                                    name: "confirmpassword",
                                    control: control, 
                                    placeholder: "",
                                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"  // Changed to lock icon
                                }}
                                errorMessage = { errors?.confirmpassword?.message }
                                rightElement = {
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}  // Changed this
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? (  
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                }
                            />

                            {/* Terms & Conditions */}
                            <FormCheckboxControlBased
                                name="ourterms"
                                control={control}
                                label={
                                    <>
                                    I agree to the{' '}
                                    <NavLink to="/terms" className="text-teal-600 hover:text-teal-700 font-semibold">
                                        Terms and Conditions
                                    </NavLink>
                                    </>
                                }
                                errorMessage={errors?.ourterms?.message}
                            />

                            {/* Register Button */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Reset Button */}
                                <CancelButton children="Reset" disabled={isSubmitting}/>
                                
                                {/* Create Account Button */}
                                <SubmitButton children="Submit" disabled={isSubmitting}/>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 font-medium">Or register with</span>
                            </div>
                        </div>

                        {/* Social Register */}
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span className="text-sm font-medium text-gray-700">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                </svg>
                                <span className="text-sm font-medium text-gray-700">GitHub</span>
                            </button>
                        </div>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center mt-6 text-gray-600">
                        Already have an account?{' '}
                        <NavLink to="/" className="font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                            Sign In →
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
}