import StatusBadge from "../ui/StatusBadge";

interface AttendanceTableRowProps {
    id: number;
    memberName: string;
    date: string;
    time: string;
    class: string;
    status: 'present' | 'late';
}

const AttendanceTableRow = ({
    id,
    memberName,
    date,
    time,
    class: className,
    status
}: AttendanceTableRowProps) => {
    return (
        <tr className="hover:bg-gray-50 dark:hover:bg-white/5">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {memberName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {time}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {className}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <StatusBadge status={status} />
            </td>
        </tr>
    );
};

export default AttendanceTableRow;
