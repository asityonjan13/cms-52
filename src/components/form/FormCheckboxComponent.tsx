import { Controller } from 'react-hook-form';
// Add this new component for checkbox with control
interface IFormCheckboxComponent{
    label: React.ReactNode;
    name: string;
    control?: any;
    errorMessage?: string;
    className?: string;
}

export const FormCheckboxControlBased = ({
    label,
    name,
    control,
    errorMessage = '',
    className = ''
  }: Readonly<IFormCheckboxComponent>) => {
    const hasError = errorMessage && errorMessage.trim() !== '';
  
    return (
      <div className="space-y-1">
        <div className="flex items-start">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                id={name}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className={`w-4 h-4 mt-1 text-teal-600 border-gray-300 rounded focus:ring-teal-500 ${
                  hasError ? 'border-red-500 focus:ring-red-500' : ''
                } ${className}`}
              />
            )}
          />
          <label htmlFor={name} className="ml-2 text-sm text-gray-700">
            {label}
          </label>
        </div>
  
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
}; 