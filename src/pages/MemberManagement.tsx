import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeading from "../components/ui/PageHeading";
import SearchBar from "../components/ui/SearchBar";
import FilterButton from "../components/ui/FilterButton";
import MemberTableRow from "../components/members/MemberTableRow";
import Pagination from "../components/ui/Pagination";
import type { Member } from "../types/member";
import api from "../services/api";

const MemberManagement = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                setLoading(true);
                const response = await api.get<Member[]>("/members");
                setMembers(response.data);
            } catch (err) {
                setError("회원 목록을 불러오는 데 실패했습니다.");
                console.error("Failed to fetch members:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (loading) {
        return <div className="w-full max-w-7xl mx-auto p-6">로딩 중...</div>;
    }

    if (error) {
        return <div className="w-full max-w-7xl mx-auto p-6 text-red-500">{error}</div>;
    }


    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* PageHeading */}
            <PageHeading
                title="회원 관리"
                actions={
                    <Link
                        to="/members/new"
                        className="flex items-center justify-center gap-2 rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal shadow-sm hover:bg-primary/90 transition-colors"
                    >
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">신규 회원 등록</span>
                    </Link>
                }
            />
            <div className="bg-white dark:bg-[#192633] rounded-xl shadow-sm p-6 mt-6">
                {/* SearchBar & Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="lg:col-span-2">
                        <SearchBar
                            placeholder="이름으로 검색"
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />
                    </div>
                    <div>
                        <FilterButton label="벨트 등급" icon="shield" />
                    </div>
                    <div>
                        <FilterButton label="회원권 만료일" icon="event_busy" />
                    </div>
                </div>
                <div className="flex gap-2 p-1 mb-4">
                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
                        <p className="text-primary text-sm font-medium leading-normal">
                            전체
                        </p>
                    </button>
                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-[#233648] px-3 hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors">
                        <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">
                            활성
                        </p>
                    </button>
                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-[#233648] px-3 hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors">
                        <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">
                            만료 임박
                        </p>
                    </button>
                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-[#233648] px-3 hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors">
                        <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">
                            만료
                        </p>
                    </button>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-[#324d67]">
                                <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-[#92adc9] uppercase tracking-wider">
                                    이름
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-[#92adc9] uppercase tracking-wider">
                                    벨트
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-[#92adc9] uppercase tracking-wider">
                                    연락처
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-[#92adc9] uppercase tracking-wider">
                                    회원권 상태
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-[#92adc9] uppercase tracking-wider">
                                    등록일
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-[#92adc9] uppercase tracking-wider text-right">
                                    관리
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member) => (
                                <MemberTableRow
                                    key={member.id}
                                    id={member.id}
                                    name={member.name}
                                    belt={member.belt}
                                    contact={member.contact}
                                    status={member.status}
                                    registrationDate={member.registrationDate}
                                    onView={() => console.log('View member:', member.id)}
                                    onDelete={() => console.log('Delete member:', member.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={8}
                    onPageChange={setCurrentPage}
                    totalItems={20}
                    itemsPerPage={5}
                />
            </div>
        </div>
    );
};

export default MemberManagement;
