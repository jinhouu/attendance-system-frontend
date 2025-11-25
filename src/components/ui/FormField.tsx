interface FormFieldProps {
    label: string;
    type: 'text' | 'tel' | 'date' | 'number' | 'select' | 'textarea';
    id: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    options?: string[];
    rows?: number;
    className?: string;
    min?: string;
    max?: string;
    defaultValue?: string | number;
}

const FormField = ({
    label,
    type,
    id,
    placeholder,
    value,
    onChange,
    options,
    rows = 4,
    className = "",
    min,
    max,
    defaultValue
}: FormFieldProps) => {
    const baseInputClass = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#324d67] bg-gray-50 dark:bg-[#111a22] focus:border-primary dark:focus:border-primary placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-[15px] text-base font-normal leading-normal";

    const renderInput = () => {
        if (type === 'select' && options) {
            return (
                <select
                    className={`${baseInputClass} h-14`}
                    id={id}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    defaultValue={defaultValue}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );
        }

        if (type === 'textarea') {
            return (
                <textarea
                    className={`${baseInputClass} resize-y`}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    rows={rows}
                    defaultValue={defaultValue as string}
                />
            );
        }

        return (
            <input
                className={`${baseInputClass} h-14`}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                min={min}
                max={max}
                defaultValue={defaultValue}
            />
        );
    };

    return (
        <div className={`flex flex-col ${className}`}>
            <label
                className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2"
                htmlFor={id}
            >
                {label}
            </label>
            {renderInput()}
        </div>
    );
};

export default FormField;
