import { memo } from "react";

interface MemberListItemProps {
    name: string;
    belt: string;
    time: string;
    avatar: string;
}

const MemberListItem = memo(({ name, belt, time, avatar }: MemberListItemProps) => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    {avatar ? (
                        <img
                            className="h-8 w-8 rounded-full"
                            data-alt="Member avatar"
                            src={avatar}
                        />
                    ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                            {name.slice(0, 1)}
                        </div>
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                        {name}
                    </p>
                    <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                        {belt}
                    </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white">
                    {time}
                </div>
            </div>
        </li>
    );
});

MemberListItem.displayName = "MemberListItem";

export default MemberListItem;
