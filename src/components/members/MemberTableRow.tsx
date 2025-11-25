import { Link } from "react-router-dom";
import BeltBadge from "../ui/BeltBadge";
import StatusBadge from "../ui/StatusBadge";

interface MemberTableRowProps {
    id: number;
    name: string;
    belt: string;
    contact: string;
    status: 'active' | 'expiring' | 'expired';
    registrationDate: string;
    onView?: () => void;
    onDelete?: () => void;
}

const MemberTableRow = ({
    id,
    name,
    belt,
    contact,
    status,
    registrationDate,
    onView,
    onDelete
}: MemberTableRowProps) => {
    return (
        <tr className="border-b border-gray-100 dark:border-t-[#324d67]">
            <td className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                {name}
            </td>
            <td className="px-4 py-4">
                <BeltBadge belt={belt as any} />
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-[#92adc9]">
                {contact}
            </td>
            <td className="px-4 py-4">
                <StatusBadge status={status} />
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-[#92adc9]">
                {registrationDate}
            </td>
            <td className="px-4 py-4 text-right">
                <div className="flex justify-end gap-2">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                        onClick={onView}
                    >
                        <span className="material-symbols-outlined text-base">
                            visibility
                        </span>
                    </button>
                    <Link
                        to={`/members/${id}`}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined text-base">
                            edit
                        </span>
                    </Link>
                    <button
                        className="p-2 rounded-full hover:bg-danger/20 text-gray-500 dark:text-gray-400 hover:text-danger dark:hover:text-danger transition-colors"
                        onClick={onDelete}
                    >
                        <span className="material-symbols-outlined text-base">
                            delete
                        </span>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MemberTableRow;
