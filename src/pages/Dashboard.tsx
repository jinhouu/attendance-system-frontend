import { useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/ui/StatCard";
import PageHeading from "../components/ui/PageHeading";
import MemberListItem from "../components/members/MemberListItem";
import SvgIcon from "@mui/material/SvgIcon";
import AddIcon from '@mui/icons-material/Add';
import ChecklistIcon from '@mui/icons-material/Checklist';

interface DashboardStats {
    todayAttendance: number;
    totalMembers: number;
    newMembersThisWeek: number;
    expiringMembers: number;
}

interface RecentMember {
    name: string;
    belt: string;
    time: string;
    avatar: string;
}

const Dashboard = () => {
    const [stats] = useState<DashboardStats>({
        todayAttendance: 34,
        totalMembers: 152,
        newMembersThisWeek: 5,
        expiringMembers: 8
    });

    const [recentMembers] = useState<RecentMember[]>([
        {
            name: "박준형",
            belt: "블루 벨트",
            time: "오후 8:32",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRJiw34vikSO1ljzQTNzhIGNTZ-wAkJeczvvNBTI33M_ObsfJ2ybyxBh2xIMybGdQOqruwTirB3LPWYDyachVXl1YF1tz-7Oxh87ZLEW9qRWbcK2-MCQS3uO_mAMWOIYFYM1KmiH_fREfWuavL7lFQzNAr5Dhb0HnpXgF4jFXO9JLL4UDqvevC8ZxiflL_9CDkuVbnMxuwqLYt0iFXE_fed47hx3fn43o0M8dM6EKZlU95-5Jtx0yKYe3Mwtxep4WIV_FpruDQuck"
        },
        {
            name: "이하나",
            belt: "화이트 벨트",
            time: "오후 8:31",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHDCnBe4bDcNWlQoJ0ef6Jqwg3QiZSzVhfFDR3zZsDVR8AQxSrkBTHmaMD_pIQcVOEWHhfvy9pk4iMysrrCeLtxOHbSQ5hfUN7Bi3bgPJwvWoIbymb9i31AI1-Q_1nM4wQ_qiuLYCz7QLXV3i_Mn003lkrlKDC0UWD9yP6NC5pY9PtxIjiApUHMBvnsF61VtFO9Ojp6dNErFE2MhkPcKS0qu_WRcXgH8MGvW5WIzNjhN9Rhmb0BYn5yfLP29eikc2k96RSQXp5fN8"
        },
        {
            name: "최민수",
            belt: "퍼플 벨트",
            time: "오후 8:29",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC918KINS4ym1PR1BXDdwvzQLYc2unnWaRjwy6-rh_Tkv-dXABBfe_FcRCQDSal3KhqVR-v87a_Cm-O2nA8o_JCtj75UysMkP-vVLZZ_A66y3mfVDi3R0-fj19FKzoKxCyn-ovJUT16BSEiztRXncqHDlRHREASbZGD7z01AjtzjzSaly4nkVkKkOauzSxskXlzxGhKPPdvAZeENrv9wibJAfGpZlgjsLcFREK6Lb0sruodvLrFAX3u7xoQWu6ydfusl8KIt39bELk"
        },
        {
            name: "정수빈",
            belt: "화이트 벨트",
            time: "오후 8:25",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC-5OZQj1hB5oGJxYkG_R8scNDn5Er6Hig_l9Q-rwwtLgXsjhmlnicXZDlFv2t87pOWKhmoO2UI71NbrXSqumjrzmo5AoQcPxhKplXRoCFVfo9HWaRRd6q1VDYy5RBP6Ctsci5Dh04oVDrD1DeknE4GM5Et4nmdfpNxLNwPz5OibCJfAu9lO9TB_QZY6lshXUuZPBkiLfeE6ibzyLRGv8_PyjVmDMIdx1u8XsUQQypIj9LiaquTyGJzhvbfjIjIR8_dune1Lh1eCI"
        },
        {
            name: "김지영",
            belt: "블루 벨트",
            time: "오후 8:22",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGy46cJBY3r1S732TRJ7Nr7iLyg7EwvMAv5IPbYgXoouZ9PWf7TEDns63mNYM5PvSh8ZG9Jgwrr-zsJZ4ys5ADzgz2Jxklhpm3OjLdmCdZ6GCOp0mVFXkg2iAoffYocgw4HCxQXRXncpi98Jmkj8vhVBuOgfbAPkaPGNBhGIH5Ixyxn049qKzukY-UMEYQy6nYI3bLqnxTU9a5BwkJQxpdlR-jAEaMYFLgx0G46wA6GaLkNmdjfugyf_ULL9DD6cGPSb7tiN-V4hM"
        }
    ]);

    return (
        <div className="p-8">
            {/* PageHeading */}
            <PageHeading
                title="관리자 대시보드"
                description="체육관 활동 및 주요 지표 개요입니다."
                actions={
                    <>
                        <Link to="/members/new"
                            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90" >
                            <SvgIcon component={AddIcon} />
                            신규 회원 등록
                        </Link>
                        <Link to="/"
                            className="flex items-center justify-center gap-2 rounded-lg bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm border border-slate-300 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700" >
                            <SvgIcon component={ChecklistIcon} />
                            출석체크 시작
                        </Link>
                    </>
                }
            />
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
                <StatCard title="오늘 출석 인원" value={stats.todayAttendance} />
                <StatCard title="총 회원 수" value={stats.totalMembers} />
                <StatCard title="이번 주 신규 회원" value={stats.newMembersThisWeek} />
                <StatCard title="만료 예정 회원" value={stats.expiringMembers} />
            </div>
            {/* Main Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Charts Section */}
                <div className="lg:col-span-2 flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                        주간 출석 현황
                    </h2>
                    <div className="mt-4 flex flex-1 flex-col">
                        <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                                210
                            </p>
                            <p className="text-sm font-medium text-green-500">+15%</p>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            지난 7일 대비
                        </p>
                        <div className="grid min-h-[240px] flex-1 grid-flow-col grid-rows-[1fr_auto] items-end justify-items-center gap-4 pt-6">
                            <div
                                className="w-full rounded-t bg-primary/20"
                                style={{ height: "100%" }}
                            ></div>
                            <div
                                className="w-full rounded-t bg-primary/20"
                                style={{ height: "70%" }}
                            ></div>
                            <div
                                className="w-full rounded-t bg-primary/20"
                                style={{ height: "80%" }}
                            ></div>
                            <div
                                className="w-full rounded-t bg-primary/20"
                                style={{ height: "40%" }}
                            ></div>
                            <div
                                className="w-full rounded-t bg-primary/20"
                                style={{ height: "90%" }}
                            ></div>
                            <div
                                className="w-full rounded-t bg-primary"
                                style={{ height: "75%" }}
                            ></div>
                            <div
                                className="w-full rounded-t bg-primary/20"
                                style={{ height: "50%" }}
                            ></div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                월
                            </p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                화
                            </p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                수
                            </p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                목
                            </p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                금
                            </p>
                            <p className="text-sm font-bold text-primary">토</p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                일
                            </p>
                        </div>
                    </div>
                </div>
                {/* Recent Activity Table Section */}
                <div className="lg:col-span-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                        최근 출석 회원
                    </h2>
                    <div className="mt-4 flow-root">
                        <ul className="divide-y divide-slate-200 dark:divide-slate-800" role="list">
                            {recentMembers.map((member, index) => (
                                <MemberListItem
                                    key={index}
                                    name={member.name}
                                    belt={member.belt}
                                    time={member.time}
                                    avatar={member.avatar}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
