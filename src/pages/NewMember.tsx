import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import api from "../services/api";
import { beltOptions, toApiBelt } from "../services/memberMapper";
import type { MemberRegisterPayload } from "../types/member";

interface MemberFormData {
    code: string;
    name: string;
    contact: string;
    belt: string;
    grau: number;
    startDate: string;
    notes: string;
}

const NewMember = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<MemberFormData>({
        code: "",
        name: "",
        contact: "",
        belt: "화이트",
        grau: 0,
        startDate: "",
        notes: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload: MemberRegisterPayload = {
            code: formData.code,
            name: formData.name,
            belt: toApiBelt(formData.belt),
            grau: formData.grau,
            phone: formData.contact.replaceAll("-", ""),
        };

        try {
            setSubmitting(true);
            setError(null);
            await api.post("/members", payload);
            navigate("/manage/members");
        } catch (err) {
            console.error("Failed to register member:", err);
            setError("회원 등록에 실패했습니다. 입력 값을 확인해주세요.");
        } finally {
            setSubmitting(false);
        }
    };

    const updateField = (field: keyof MemberFormData, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 lg:p-10">
            {/* PageHeading */}
            <div className="mb-8">
                <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    신규 회원 등록
                </h1>
            </div>
            {/* Form Card */}
            <div className="bg-white dark:bg-[#192633] rounded-xl shadow-md">
                <div className="p-6 border-b border-gray-200 dark:border-[#324d67]">
                    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        회원 정보
                    </h2>
                    <p className="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal mt-1">
                        새로운 회원의 정보를 입력해주세요.
                    </p>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>
                    {error && (
                        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                            {error}
                        </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            label="회원번호"
                            type="text"
                            id="code"
                            placeholder="숫자 4자리"
                            value={formData.code}
                            onChange={(value) => updateField('code', value)}
                        />
                        {/* 이름 */}
                        <FormField
                            label="이름"
                            type="text"
                            id="name"
                            placeholder="이름을 입력하세요"
                            value={formData.name}
                            onChange={(value) => updateField('name', value)}
                        />
                        {/* 연락처 */}
                        <FormField
                            label="연락처"
                            type="tel"
                            id="contact"
                            placeholder="'-' 없이 입력"
                            value={formData.contact}
                            onChange={(value) => updateField('contact', value)}
                        />
                        {/* 벨트 */}
                        <FormField
                            label="벨트"
                            type="select"
                            id="belt"
                            value={formData.belt}
                            onChange={(value) => updateField('belt', value)}
                            options={beltOptions}
                        />
                        <FormField
                            label="그라우 (0-4)"
                            type="number"
                            id="grau"
                            value={formData.grau}
                            onChange={(value) => updateField('grau', Number(value))}
                            min="0"
                            max="4"
                        />
                        {/* 회원권 시작일 */}
                        <FormField
                            label="회원권 시작일"
                            type="date"
                            id="start-date"
                            value={formData.startDate}
                            onChange={(value) => updateField('startDate', value)}
                        />
                        {/* 특이사항 (메모) */}
                        <FormField
                            label="특이사항 (메모)"
                            type="textarea"
                            id="notes"
                            placeholder="부상 이력, 알러지 등 특이사항을 입력하세요."
                            value={formData.notes}
                            onChange={(value) => updateField('notes', value)}
                            rows={4}
                            className="md:col-span-2"
                        />
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-[#324d67]">
                        <button
                            className="px-6 py-3 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                            type="button"
                            onClick={() => navigate(-1)}
                        >
                            취소
                        </button>
                        <button
                            className="px-6 py-3 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors"
                            disabled={submitting}
                            type="submit"
                        >
                            {submitting ? "등록 중..." : "등록하기"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewMember;
