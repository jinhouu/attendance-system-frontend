import Monthly from "./monthly/Monthly.tsx";
import Attendance from "./attendance/Attendance.tsx";
import Daily from "./daily/Daily.tsx";

function Content() {
    return (
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-6 p-6 pb-8 overflow-hidden">
            <Monthly/>
            <Attendance/>
            <Daily/>
        </main>
    )
}

export default Content