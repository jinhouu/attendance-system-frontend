import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";

interface MemberFormData {
    name: string;
    contact: string;
    belt: string;
    startDate: string;
    payment: string;
    notes: string;
}

const NewMember = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<MemberFormData>({
        name: "",
        contact: "",
        belt: "화이트",
        startDate: "",
        payment: "",
        notes: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    const updateField = (field: keyof MemberFormData, value: string) => {
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            options={["화이트", "블루", "퍼플", "브라운", "블랙"]}
                        />
                        {/* 회원권 시작일 */}
                        <FormField
                            label="회원권 시작일"
                            type="date"
                            id="start-date"
                            value={formData.startDate}
                            onChange={(value) => updateField('startDate', value)}
                        />
                        {/* 결제 정보 */}
                        <FormField
                            label="결제 정보 (선택)"
                            type="text"
                            id="payment"
                            placeholder="등록비, 회비 등"
                            value={formData.payment}
                            onChange={(value) => updateField('payment', value)}
                            className="md:col-span-2"
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
                            type="submit"
                        >
                            등록하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewMember;
