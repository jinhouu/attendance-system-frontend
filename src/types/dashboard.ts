export interface DashboardStats {
    todayAttendance: number;
    totalMembers: number;
    newMembersThisWeek: number;
    expiringMembers: number;
}

export interface RecentMember {
    name: string;
    belt: string;
    time: string;
    avatar: string;
}
