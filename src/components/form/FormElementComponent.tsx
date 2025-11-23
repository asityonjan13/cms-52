import { FormLabelComponent, type IFormLabelComponentProps } from "./FormLabelComponent";
import { FormInputComponentRegisterBased, FormInputComponentControlBased, type IFormInputComponentProps } from "./FormInputComponent";
import type React from "react";


interface IActionButtonProps{
    disabled?:boolean;
    children: React.ReactNode;
} 

export const CancelButton = ({children="Cancel", disabled = false}: Readonly<IActionButtonProps>) => {
    return <>
    <button
        type="reset"
        disabled={disabled}
        className="disabled:bg-red-800/30 disabled:cursor-not-allowed w-full bg-red-800 text-white py-3 rounded-xl 
                   font-semibold hover:from-rose-600 hover:to-red-700 transition-all duration-200 shadow-lg 
                   shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transform hover:-translate-y-0.5">
        {children} 
    </button>
    </>
}
export const SubmitButton = ({children="Submit", disabled = false}: Readonly<IActionButtonProps>) => {
    return <>
    <button
        type="submit"
        disabled={disabled}
        className="disabled:bg-teal-800/30 disabled:cursor-not-allowed w-full bg-teal-800 text-white py-3 rounded-xl 
                   font-semibold hover:from-rose-600 hover:to-teal-700 transition-all duration-200 shadow-lg 
                   shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transform hover:-translate-y-0.5">
        {children} 
    </button>
    </>
}
//For both Label and input as register based
interface IFormBothComponentProps{
    label: IFormLabelComponentProps,
    input: IFormInputComponentProps,
    rightElement?: React.ReactNode,
    errorMessage?: string 
}
 
export const FormBothComponentRegisterBased = ({
    label, 
    input, 
    errorMessage = '',
    rightElement
}: Readonly<IFormBothComponentProps>) => {
    const hasError = errorMessage && errorMessage.trim() !== '';

    return (
        <div className="space-y-1">
            <FormLabelComponent 
                className={label.className} 
                htmlFor={label.htmlFor} 
                children={label.children} 
            />
            <FormInputComponentRegisterBased 
                rightElement={rightElement} 
                icon={input.icon} 
                register={input.register} 
                onChange={input.onChange} 
                className={`${input.className} ${hasError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                type={input?.type} 
                name={input?.name} 
                placeholder={input.placeholder}
            />
            
            {/* Dynamic Error Display */}
            {hasError && (
                <div className="flex items-start gap-1.5 transition-all duration-200 ease-in-out">
                    <svg 
                        className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                    <span className="text-red-600 text-sm font-medium">
                        {errorMessage}
                    </span>
                </div>
            )}
        </div>
    );
}

export const FormBothComponentControlBased = ({
    label, 
    input, 
    errorMessage = '',
    rightElement
}: Readonly<IFormBothComponentProps>) => {
    const hasError = errorMessage && errorMessage.trim() !== '';

    return (
        <div className="space-y-1">
            <FormLabelComponent 
                className={label.className} 
                htmlFor={label.htmlFor} 
                children={label.children} 
            />
            <FormInputComponentControlBased 
                control={input.control}
                onChange={input.onChange} 
                className={`${input.className} ${hasError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                type={input?.type} 
                name={input?.name} 
                placeholder={input.placeholder}
                icon={input.icon}
                rightElement={rightElement}
            />
            
            {/* Dynamic Error Display */}
            {hasError && (
                <div className="flex items-start gap-1.5 transition-all duration-200 ease-in-out">
                    <svg 
                        className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                    <span className="text-red-600 text-sm font-medium">
                        {errorMessage}
                    </span>
                </div>
            )}
        </div>
    );
}