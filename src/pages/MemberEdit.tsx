import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormField from "../components/ui/FormField";
import api from "../services/api";
import { beltOptions, mapApiMember, toApiBelt } from "../services/memberMapper";
import type { ApiMember, MemberUpdatePayload } from "../types/member";

interface MemberData {
    code: string;
    name: string;
    contact: string;
    joinDate: string;
    belt: string;
    grau: number;
    hasPreta: boolean;
    membershipStatus: string;
    membershipExpiry: string;
}

const MemberEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [memberData, setMemberData] = useState<MemberData>({
        code: "",
        name: "",
        contact: "",
        joinDate: "",
        belt: "화이트",
        grau: 0,
        hasPreta: false,
        membershipStatus: "활성",
        membershipExpiry: "",
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMember = async () => {
            if (!id) {
                setError("회원 ID가 없습니다.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await api.get<ApiMember>(`/members/${id}`);
                const member = mapApiMember(response.data);

                setMemberData({
                    code: member.code,
                    name: member.name,
                    contact: member.contact,
                    joinDate: member.registrationDate,
                    belt: member.belt,
                    grau: member.grau,
                    hasPreta: false,
                    membershipStatus: member.status === "active" ? "활성" : member.status === "expiring" ? "만료 임박" : "만료",
                    membershipExpiry: member.expirationDate,
                });
                setError(null);
            } catch (err) {
                console.error("Failed to fetch member:", err);
                setError("회원 정보를 불러오는 데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchMember();
    }, [id]);

    const updateField = (field: keyof MemberData, value: string | number | boolean) => {
        setMemberData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        if (!id) {
            return;
        }

        const payload: MemberUpdatePayload = {
            code: memberData.code,
            belt: toApiBelt(memberData.belt),
            grau: memberData.grau,
            phone: memberData.contact.replaceAll("-", ""),
        };

        try {
            setSaving(true);
            setError(null);
            await api.put(`/members/${id}`, payload);
            navigate("/manage/members");
        } catch (err) {
            console.error("Failed to update member:", err);
            setError("회원 정보 저장에 실패했습니다.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">로딩 중...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    {memberData.name} 회원 정보
                </h1>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-[#233648] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-[#324d67] transition-colors"
                    onClick={() => navigate(-1)}
                >
                    <span className="truncate">뒤로가기</span>
                </button>
            </div>
            {error && (
                <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                    {error}
                </p>
            )}
            <div className="flex flex-col gap-6">
                {/* Section 1: 기본 정보 */}
                <div className="bg-white dark:bg-[#111a22] rounded-xl shadow-md">
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pt-5 pb-3 border-b border-gray-200 dark:border-[#324d67]">
                        기본 정보
                    </h3>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            label="회원번호"
                            type="text"
                            id="code"
                            value={memberData.code}
                            onChange={(value) => updateField('code', value)}
                        />
                        <FormField
                            label="이름"
                            type="text"
                            id="name"
                            value={memberData.name}
                            onChange={(value) => updateField('name', value)}
                        />
                        <FormField
                            label="연락처"
                            type="text"
                            id="contact"
                            value={memberData.contact}
                            onChange={(value) => updateField('contact', value)}
                        />
                        <FormField
                            label="가입일"
                            type="date"
                            id="join-date"
                            value={memberData.joinDate}
                            onChange={(value) => updateField('joinDate', value)}
                            className="md:col-span-2"
                        />
                    </div>
                </div>
                {/* Section 2: 주짓수 정보 */}
                <div className="bg-white dark:bg-[#111a22] rounded-xl shadow-md">
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pt-5 pb-3 border-b border-gray-200 dark:border-[#324d67]">
                        주짓수 정보
                    </h3>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <FormField
                            label="벨트 등급"
                            type="select"
                            id="belt"
                            value={memberData.belt}
                            onChange={(value) => updateField('belt', value)}
                            options={beltOptions}
                        />
                        <FormField
                            label="그라우 (0-4)"
                            type="number"
                            id="grau"
                            value={memberData.grau}
                            onChange={(value) => updateField('grau', parseInt(value))}
                            min="0"
                            max="4"
                        />
                        <div className="flex flex-col md:col-span-2">
                            <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal pb-2">
                                쁘레따
                            </p>
                            <div className="flex items-center gap-4">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        className="sr-only peer"
                                        type="checkbox"
                                        checked={memberData.hasPreta}
                                        onChange={(e) => updateField('hasPreta', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        해당 없음 / 해당
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="md:col-span-2 flex justify-start pt-2">
                            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary dark:text-blue-300 text-sm font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                                <span className="truncate">승급 기록 보기</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Section 3: 회원권 정보 */}
                <div className="bg-white dark:bg-[#111a22] rounded-xl shadow-md">
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pt-5 pb-3 border-b border-gray-200 dark:border-[#324d67]">
                        회원권 정보
                    </h3>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <div className="flex flex-col">
                            <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal pb-2">
                                회원권 상태
                            </p>
                            <div className="flex items-center h-12">
                                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300">
                                    {memberData.membershipStatus}
                                </span>
                            </div>
                        </div>
                        <FormField
                            label="회원권 만료일"
                            type="date"
                            id="membership-expiry"
                            value={memberData.membershipExpiry}
                            onChange={(value) => updateField('membershipExpiry', value)}
                        />
                        <div className="md:col-span-2 flex justify-start pt-2">
                            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary dark:text-blue-300 text-sm font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                                <span className="truncate">기간 연장</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Action Buttons Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#324d67] flex justify-end gap-4">
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-gray-200 dark:bg-[#233648] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-[#324d67] transition-colors"
                    onClick={() => navigate(-1)}
                >
                    <span className="truncate">취소</span>
                </button>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-500 transition-colors"
                    disabled={saving}
                    onClick={handleSave}
                >
                    <span className="truncate">{saving ? "저장 중..." : "변경사항 저장"}</span>
                </button>
            </div>
        </div>
    );
};

export default MemberEdit;
