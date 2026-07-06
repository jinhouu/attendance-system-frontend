import http from "./http";
import type { ApiAttendance } from "../types/attendance";

export const getDailyAttendances = async (): Promise<ApiAttendance[]> => {
    const response = await http.get<ApiAttendance[]>("/attendances/daily");
    return response.data;
};
