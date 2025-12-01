import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/ui/StatCard";
import PageHeading from "../components/ui/PageHeading";
import MemberListItem from "../components/members/MemberListItem";
import SvgIcon from "@mui/material/SvgIcon";
import AddIcon from '@mui/icons-material/Add';
import ChecklistIcon from '@mui/icons-material/Checklist';
import type { DashboardStats, RecentMember } from "../types/dashboard";
import api from "../services/api";

const Dashboard = () => {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [recentMembers, setRecentMembers] = useState<RecentMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const [statsResponse, recentMembersResponse] = await Promise.all([
                    api.get<DashboardStats>("/dashboard/stats"),
                    api.get<RecentMember[]>("/dashboard/recent-members"),
                ]);
                setStats(statsResponse.data);
                setRecentMembers(recentMembersResponse.data);
            } catch (err) {
                setError("대시보드 데이터를 불러오는 데 실패했습니다.");
                console.error("Failed to fetch dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return <div className="p-8">로딩 중...</div>;
    }

    if (error) {
        return <div className="p-8 text-red-500">{error}</div>;
    }

    if (!stats) {
        return <div className="p-8 text-red-500">데이터를 찾을 수 없습니다.</div>;
    }






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
