interface StatCardProps {
    title: string;
    value: string | number;
    icon?: string;
    iconColor?: string;
}

const StatCard = ({ title, value, icon, iconColor = "text-primary" }: StatCardProps) => {
    return (
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            {icon && (
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-${iconColor}/10 ${iconColor} mb-2`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
            )}
            <p className="text-base font-medium text-slate-600 dark:text-slate-300">
                {title}
            </p>
            <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {value}
            </p>
        </div>
    );
};

export default StatCard;
