import http from "./http";
import type { ApiMember, MemberRegisterPayload, MemberUpdatePayload } from "../types/member";

export const getMembers = async (): Promise<ApiMember[]> => {
    const response = await http.get<ApiMember[]>("/members");
    return response.data;
};

export const getMember = async (id: string): Promise<ApiMember> => {
    const response = await http.get<ApiMember>(`/members/${id}`);
    return response.data;
};

export const registerMember = async (payload: MemberRegisterPayload): Promise<ApiMember> => {
    const response = await http.post<ApiMember>("/members", payload);
    return response.data;
};

export const updateMember = async (
    id: string,
    payload: MemberUpdatePayload,
): Promise<ApiMember> => {
    const response = await http.put<ApiMember>(`/members/${id}`, payload);
    return response.data;
};
