//For Label only
export interface IFormLabelComponentProps{
    htmlFor?: string,
    className?: string,
    children: React.ReactNode
    
}
export const FormLabelComponent = ({htmlFor="", className, children}:Readonly<IFormLabelComponentProps>) =>{

    return(
    <>
    <label  htmlFor={htmlFor} className={`block text-sm font-semibold text-gray-700 mb-2 ${className}`}>
        {children}
    </label>    
    </>
    )
}

