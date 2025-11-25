import { type ReactNode } from "react";

interface PageHeadingProps {
    title: string;
    description?: string;
    actions?: ReactNode;
}

const PageHeading = ({ title, description, actions }: PageHeadingProps) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h1>
                {description && (
                    <p className="text-base font-normal text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                )}
            </div>
            {actions && (
                <div className="flex items-center gap-3">
                    {actions}
                </div>
            )}
        </div>
    );
};

export default PageHeading;
