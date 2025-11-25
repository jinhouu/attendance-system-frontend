import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";


const Attendance = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="relative flex h-screen w-full flex-col overflow-hidden">
                <Header/>
                <Content/>
            </div>
        </div>
    )
}

export default Attendance
