import type { ApiMember } from "./member.ts";

export interface RawDailyAttendanceMember {
    memberInfo: {
        id: number;
        name: string;
        belt: {
            belt: string;
            grau: number;
        };
    };
    time: string;
}

export type ApiAttendance = {
    id: number;
    timestamp: string;
    time: string;
    memberInfo: ApiMember;
};
