import http from "./http";
import type { DashboardStats, RecentMember } from "../types/dashboard";

export const getDashboardStats = async (): Promise<DashboardStats> => {
    const response = await http.get<DashboardStats>("/dashboard/stats");
    return response.data;
};

export const getRecentMembers = async (): Promise<RecentMember[]> => {
    const response = await http.get<RecentMember[]>("/dashboard/recent-members");
    return response.data;
};
