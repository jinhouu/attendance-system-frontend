import { memo, useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import type { ApiAttendance } from "../../types/attendance.ts";
import Belt from "../Belt.tsx";

type DailyMember = {
    id: number;
    name: string;
    belt: string;
    grau: number;
    time: string;
};

const DailyList = memo(() => {
    const [dailyList, setDailyList] = useState<DailyMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDailyAttendance = async () => {
            try {
                setLoading(true);
                const response = await api.get<ApiAttendance[]>('/attendances/daily');
                setDailyList(response.data.map((attendance) => ({
                    id: attendance.memberInfo.id,
                    name: attendance.memberInfo.name,
                    belt: attendance.memberInfo.belt.belt.toLowerCase(),
                    grau: attendance.memberInfo.belt.grau,
                    time: attendance.time,
                })));
                setError(null);
            } catch (err) {
                console.error("Failed to fetch daily attendance:", err);
                setError("오늘 출석 목록을 불러오지 못했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchDailyAttendance();
    }, []);

    const attendanceItems = useMemo(
        () =>
            dailyList.map((member, index) => (
                <li className="flex items-center gap-4 p-3 bg-white/5 rounded-lg" key={`${member.id}-${index}`}>
                    <div className="flex-1 p-1">
                        <p className="text-white font-semibold">{member.name}</p>
                        <Belt belt={member.belt} grau={member.grau} />
                    </div>
                    <span className="text-[#92adc9] font-medium">{member.time}</span>
                </li>
            )),
        [dailyList],
    );

    if (loading) {
        return <p className="text-[#92adc9]">출석 목록을 불러오는 중...</p>;
    }

    if (error) {
        return <p className="text-red-300">{error}</p>;
    }

    return (
        <ul className="flex flex-col gap-3 min-h-0">
            {attendanceItems}
        </ul>
    );
});

DailyList.displayName = "DailyList";

export default DailyList;
