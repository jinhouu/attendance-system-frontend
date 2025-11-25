import { useState } from "react";
import PageHeading from "../components/ui/PageHeading";
import StatCard from "../components/ui/StatCard";
import SearchBar from "../components/ui/SearchBar";
import AttendanceTableRow from "../components/attendance/AttendanceTableRow";
import Pagination from "../components/ui/Pagination";

interface AttendanceRecord {
    id: number;
    memberName: string;
    date: string;
    time: string;
    class: string;
    status: 'present' | 'late';
}

const MemberAttendance = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [dateRangeStart, setDateRangeStart] = useState("2023년 10월 5일");
    const [dateRangeEnd, setDateRangeEnd] = useState("2023년 10월 30일");

    const [attendanceRecords] = useState<AttendanceRecord[]>([
        {
            id: 101,
            memberName: "이현우",
            date: "2023-10-29",
            time: "19:02",
            class: "야간반 A",
            status: "present"
        },
        {
            id: 100,
            memberName: "박서준",
            date: "2023-10-29",
            time: "19:01",
            class: "야간반 A",
            status: "present"
        },
        {
            id: 99,
            memberName: "최지아",
            date: "2023-10-28",
            time: "10:35",
            class: "주간반",
            status: "present"
        },
        {
            id: 98,
            memberName: "정다은",
            date: "2023-10-27",
            time: "19:10",
            class: "야간반 B",
            status: "late"
        },
        {
            id: 97,
            memberName: "김민준",
            date: "2023-10-27",
            time: "19:05",
            class: "야간반 A",
            status: "present"
        }
    ]);

    return (
        <div className="mx-auto max-w-7xl p-6 lg:p-10">
            {/* PageHeading */}
            <PageHeading
                title="회원 출석 기록"
                actions={
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "20px" }}
                        >
                            download
                        </span>
                        <span>데이터 내보내기</span>
                    </button>
                }
            />
            {/* Filter & Search Section */}
            <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111a22] p-4 lg:p-6 mt-8">
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-4">
                    조회 및 필터
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* CalendarPicker */}
                    <div className="md:col-span-2">
                        <label
                            className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5"
                            htmlFor="date-range"
                        >
                            기간 선택
                        </label>
                        <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#233648]">
                            <input
                                className="flex-1 w-full p-2.5 bg-transparent border-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-0 text-center"
                                type="text"
                                value={dateRangeStart}
                                onChange={(e) => setDateRangeStart(e.target.value)}
                            />
                            <span className="text-gray-500 dark:text-gray-400">-</span>
                            <input
                                className="flex-1 w-full p-2.5 bg-transparent border-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-0 text-center"
                                type="text"
                                value={dateRangeEnd}
                                onChange={(e) => setDateRangeEnd(e.target.value)}
                            />
                            <button className="p-2.5 text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined">
                                    calendar_month
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* SearchBar */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5"
                            htmlFor="search-member"
                        >
                            회원 검색
                        </label>
                        <SearchBar
                            placeholder="이름 또는 ID"
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />
                    </div>
                    {/* Apply Button */}
                    <div className="self-end">
                        <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 h-11">
                            조회
                        </button>
                    </div>
                </div>
            </div>
            {/* Summary Dashboard Section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <StatCard
                    title="오늘 총 출석 인원"
                    value="23명"
                    icon="today"
                    iconColor="text-primary"
                />
                <StatCard
                    title="이번 주 평균 출석률"
                    value="82%"
                    icon="trending_up"
                    iconColor="text-green-500"
                />
                <StatCard
                    title="이달의 출석왕"
                    value="김민준"
                    icon="emoji_events"
                    iconColor="text-orange-500"
                />
            </div>
            {/* Data Table Section */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111a22]">
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white p-6">
                    상세 출석 기록
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/20">
                            <tr>
                                <th
                                    className="px-6 py-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                                    scope="col"
                                >
                                    번호
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                                    scope="col"
                                >
                                    회원 이름
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                                    scope="col"
                                >
                                    출석일
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                                    scope="col"
                                >
                                    출석 시간
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                                    scope="col"
                                >
                                    수련 클래스
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                                    scope="col"
                                >
                                    상태
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                            {attendanceRecords.map((record) => (
                                <AttendanceTableRow
                                    key={record.id}
                                    id={record.id}
                                    memberName={record.memberName}
                                    date={record.date}
                                    time={record.time}
                                    class={record.class}
                                    status={record.status}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-3">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={20}
                        onPageChange={setCurrentPage}
                        totalItems={97}
                        itemsPerPage={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default MemberAttendance;
