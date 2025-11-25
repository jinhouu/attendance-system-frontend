type BeltType = 'white' | 'blue' | 'purple' | 'brown' | 'black' | '화이트' | '블루' | '퍼플' | '브라운' | '블랙';

interface BeltBadgeProps {
    belt: BeltType;
    label?: string;
}

const BeltBadge = ({ belt, label }: BeltBadgeProps) => {
    const getBeltConfig = (belt: BeltType) => {
        const normalizedBelt = belt.toLowerCase();

        const configs: Record<string, { label: string; className: string }> = {
            'white': {
                label: label || '화이트',
                className: 'bg-gray-200 text-gray-800'
            },
            '화이트': {
                label: label || '화이트',
                className: 'bg-gray-200 text-gray-800'
            },
            'blue': {
                label: label || '블루',
                className: 'bg-blue-100 text-blue-800'
            },
            '블루': {
                label: label || '블루',
                className: 'bg-blue-100 text-blue-800'
            },
            'purple': {
                label: label || '퍼플',
                className: 'bg-purple-100 text-purple-800'
            },
            '퍼플': {
                label: label || '퍼플',
                className: 'bg-purple-100 text-purple-800'
            },
            'brown': {
                label: label || '브라운',
                className: 'bg-amber-100 text-amber-800'
            },
            '브라운': {
                label: label || '브라운',
                className: 'bg-amber-100 text-amber-800'
            },
            'black': {
                label: label || '블랙',
                className: 'bg-gray-800 text-white'
            },
            '블랙': {
                label: label || '블랙',
                className: 'bg-gray-800 text-white'
            }
        };

        return configs[normalizedBelt] || configs['white'];
    };

    const config = getBeltConfig(belt);

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
            {config.label}
        </span>
    );
};

export default BeltBadge;
