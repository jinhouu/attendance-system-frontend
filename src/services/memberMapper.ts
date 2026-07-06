import type { BeltType } from "../components/ui/BeltBadge.tsx";
import type { ApiBelt, ApiMember, Member } from "../types/member.ts";

const apiToViewBelt: Record<ApiBelt, BeltType> = {
    WHITE: "white",
    BLUE: "blue",
    PURPLE: "purple",
    BROWN: "brown",
    BLACK: "black",
};

const viewToApiBelt: Record<string, ApiBelt> = {
    white: "WHITE",
    blue: "BLUE",
    purple: "PURPLE",
    brown: "BROWN",
    black: "BLACK",
    화이트: "WHITE",
    블루: "BLUE",
    퍼플: "PURPLE",
    브라운: "BROWN",
    블랙: "BLACK",
};

export const beltOptions = ["화이트", "블루", "퍼플", "브라운", "블랙"];

export const toApiBelt = (belt: string): ApiBelt => viewToApiBelt[belt] ?? "WHITE";

export const toViewBelt = (belt: ApiBelt): BeltType => apiToViewBelt[belt] ?? "white";

export const getMembershipStatus = (expirationDate: string): Member["status"] => {
    const today = new Date();
    const expiration = new Date(`${expirationDate}T00:00:00`);
    const diffDays = Math.ceil((expiration.getTime() - today.getTime()) / 86_400_000);

    if (diffDays < 0) {
        return "expired";
    }

    if (diffDays <= 7) {
        return "expiring";
    }

    return "active";
};

export const mapApiMember = (member: ApiMember): Member => ({
    id: member.id,
    code: member.code,
    name: member.name,
    belt: toViewBelt(member.belt.belt),
    grau: member.belt.grau,
    contact: member.phone,
    status: getMembershipStatus(member.expirationDate),
    registrationDate: member.registrationDate,
    expirationDate: member.expirationDate,
});
