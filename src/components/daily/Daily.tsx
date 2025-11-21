import DailyList from "./DailyList.tsx";

function Daily() {
    return (
        <div className="hidden lg:flex flex-col gap-4 bg-white/5 p-6 rounded-xl order-3 xl:order-3 overflow-y-auto">
            <h3 className="text-white text-2xl font-bold tracking-tight">오늘 출석한 회원</h3>
            <DailyList/>
        </div>
    )
}

export default Daily