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