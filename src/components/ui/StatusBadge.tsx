import { memo } from "react";

type StatusType = 'active' | 'expiring' | 'expired' | 'present' | 'late';

interface StatusBadgeProps {
    status: StatusType;
    label?: string;
}

const statusConfigs: Record<StatusType, { label: string; className: string }> = {
    active: {
        label: '활성',
        className: 'bg-success/20 text-success'
    },
    expiring: {
        label: '만료 임박',
        className: 'bg-warning/20 text-warning'
    },
    expired: {
        label: '만료',
        className: 'bg-danger/20 text-danger'
    },
    present: {
        label: '출석',
        className: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300'
    },
    late: {
        label: '지각',
        className: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300'
    }
};

const StatusBadge = memo(({ status, label }: StatusBadgeProps) => {
    const config = statusConfigs[status];

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
            {label || config.label}
        </span>
    );
});

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
