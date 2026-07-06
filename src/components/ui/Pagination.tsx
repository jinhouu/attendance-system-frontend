import { memo, useCallback, useMemo } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems?: number;
    itemsPerPage?: number;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    itemsPerPage = 5
}: PaginationProps) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems || 0);
    const pageNumbers = useMemo(
        () => Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1),
        [totalPages],
    );

    const handlePrevious = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }, [currentPage, onPageChange]);

    const handleNext = useCallback(() => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }, [currentPage, onPageChange, totalPages]);

    return (
        <div className="flex items-center justify-between mt-6 px-4">
            {totalItems && (
                <p className="text-sm text-gray-500 dark:text-[#92adc9]">
                    Showing {startItem} to {endItem} of {totalItems} results
                </p>
            )}
            <div className="flex items-center gap-2">
                <button
                    className="flex items-center justify-center size-9 rounded-lg border border-gray-200 dark:border-[#324d67] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#233648] transition-colors disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={handlePrevious}
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        className={`flex items-center justify-center size-9 rounded-lg ${page === currentPage
                                ? 'bg-primary text-white'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#233648] transition-colors'
                            }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {totalPages > 3 && (
                    <>
                        <button className="flex items-center justify-center size-9 rounded-lg text-gray-500 dark:text-gray-400">
                            ...
                        </button>
                        <button
                            className="flex items-center justify-center size-9 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#233648] transition-colors"
                            onClick={() => onPageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                <button
                    className="flex items-center justify-center size-9 rounded-lg border border-gray-200 dark:border-[#324d67] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#233648] transition-colors disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={handleNext}
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    );
};

export default memo(Pagination);
