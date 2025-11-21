import MonthlyList from "./MonthlyList.tsx";

function Monthly() {
    return (
        <div className="hidden lg:flex flex-col gap-4 bg-white/5 p-6 rounded-xl order-1 xl:order-1 overflow-y-auto">
            <h3 className="text-white text-2xl font-bold tracking-tight shrink-0">이달의 출석왕</h3>
            <MonthlyList/>
        </div>
    )
}

export default Monthly