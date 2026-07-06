import { memo } from "react";

interface SearchBarProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const SearchBar = memo(({ placeholder, value, onChange, className = "" }: SearchBarProps) => {
    return (
        <label className={`flex flex-col w-full ${className}`}>
            <div className="flex w-full flex-1 items-stretch rounded-lg h-11 bg-gray-100 dark:bg-[#233648]">
                <div className="text-gray-400 dark:text-[#92adc9] flex items-center justify-center pl-4">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-[#92adc9] px-2 text-base font-normal"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </label>
    );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
