import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
interface FormFieldProps {
    label: string;
    type: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
}

export const FormField = ({ label, type, error, register }: FormFieldProps) => {
    const inputClass = `
        w-full px-4 py-2 mt-1 border rounded-md 
        ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}
    `;

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input type={type} {...register} className={inputClass} />
            {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
        </div>
    );
};