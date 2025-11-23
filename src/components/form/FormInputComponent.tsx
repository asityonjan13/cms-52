import type { ChangeEvent } from 'react';
import { Controller } from 'react-hook-form';

//For input only
export interface IFormInputComponentProps {
    type?: 'text' | 'password' | 'email' | 'url' | 'date' |'tel' | 'time' | 'datetime-local';
    name: string;
    className?: string;
    icon?: string;
    rightElement?:React.ReactNode,
    //eslint-disable-next-line
    register?: any
    //eslint-disable-next-line
    control?: any
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
export const FormInputComponentRegisterBased = ({ 
  type = 'text', 
  name,
  className = '',
  icon ='', 
  register,
  rightElement,
  placeholder = 'Enter your input', 
  onChange}: Readonly<IFormInputComponentProps>) => {
    return (
      <>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
            </div>
            <input
              type={type}
              // name={name}
              id={name}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                        focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                        transition-all duration-200 text-gray-900 placeholder-gray-400 ${className}`}
              placeholder={placeholder}
              {...register(name,{required: true})}
              onChange={onChange}
            />
            {rightElement}
        </div>    
      </>
    );
  }

export const FormInputComponentControlBased = ({ 
    type = 'text', 
    name,
    className = '',
    icon = '', 
    control,
    rightElement,
    placeholder = 'Enter your input', 
    onChange
  }: Readonly<IFormInputComponentProps>) => {
    return (
      <Controller name={name} control={control}
        render={({ field }) => (
          <>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
      
                <input
                  type={type}
                  id={name}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);  // RHF update
                    onChange?.(e);      // user callback
                  }}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                              focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                              transition-all duration-200 text-gray-900 placeholder-gray-400 ${className}`}
                  placeholder={placeholder}
                />
                {rightElement}
            </div>
          </>
        )}
      />
    );

  };
  
  
  