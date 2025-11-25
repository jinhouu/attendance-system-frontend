interface FilterButtonProps {
    label: string;
    icon: string;
    onClick?: () => void;
}

const FilterButton = ({ label, icon, onClick }: FilterButtonProps) => {
    return (
        <button
            className="flex h-11 w-full items-center justify-between gap-x-2 rounded-lg bg-gray-100 dark:bg-[#233648] px-4"
            onClick={onClick}
        >
            <div className="flex items-center gap-x-2">
                <span className="material-symbols-outlined text-gray-500 dark:text-[#92adc9]">
                    {icon}
                </span>
                <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                    {label}
                </p>
            </div>
            <span className="material-symbols-outlined text-gray-500 dark:text-[#92adc9]">
                expand_more
            </span>
        </button>
    );
};

export default FilterButton;
