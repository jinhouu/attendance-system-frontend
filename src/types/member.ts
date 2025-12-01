export type Member = {
    id: number;
    name: string;
    belt: string;
    contact: string;
    status: 'active' | 'expiring' | 'expired';
    registrationDate: string;
    grau?: number;
    time?: string;
}