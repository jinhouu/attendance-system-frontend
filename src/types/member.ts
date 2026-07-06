import type { BeltType } from "../components/ui/BeltBadge.tsx";

export type Member = {
    id: number;
    code: string;
    name: string;
    belt: BeltType;
    grau: number;
    contact: string;
    status: 'active' | 'expiring' | 'expired';
    registrationDate: string;
    expirationDate: string;
    time?: string;
};

export type ApiBelt = "WHITE" | "BLUE" | "PURPLE" | "BROWN" | "BLACK";

export type ApiMember = {
    id: number;
    name: string;
    code: string;
    phone: string;
    belt: {
        belt: ApiBelt;
        grau: number;
    };
    registrationDate: string;
    expirationDate: string;
};

export type MemberRegisterPayload = {
    code: string;
    name: string;
    belt: ApiBelt;
    grau: number;
    phone: string;
};

export type MemberUpdatePayload = {
    code: string;
    belt: ApiBelt;
    grau: number;
    phone: string;
};
