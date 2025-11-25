import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SvgIcon from "@mui/material/SvgIcon";

const Layout = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === "/" && location.pathname === "/manage") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

    const linkClass = (path: string) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive(path)
            ? "bg-primary/20 text-primary"
            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`;

    return (
        <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display">
            {/* SideNavBar */}
            <aside className="flex w-64 flex-col bg-white dark:bg-background-dark dark:border-r dark:border-slate-800 p-4 sticky top-0 h-screen">
                <div className="flex items-center gap-3 px-3 py-4">
                    <div className="size-8 text-primary">
                        <SvgIcon component={SportsMmaIcon} style={{ fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}/>
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                        Jiu-Jitsu Gym
                    </h1>
                </div>
                <div className="flex h-full flex-col justify-between">
                    <div className="flex flex-col gap-2 mt-4">
                        <Link to="/manage" className={linkClass("/")}>
                            <SvgIcon component={DashboardIcon} />
                            <p className="text-sm font-medium">대시보드</p>
                        </Link>
                        <Link to="/manage/members" className={linkClass("/manage/members")}>
                            <SvgIcon component={GroupIcon} />
                            <p className="text-sm font-medium">회원 관리</p>
                        </Link>
                        <Link to="/manage/attendance" className={linkClass("/manage/attendance")}>
                            <SvgIcon component={CalendarMonthIcon} />
                            <p className="text-sm font-medium">출석 관리</p>
                        </Link>
                        <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                            <SvgIcon component={TaskAltIcon} />
                            <p className="text-sm font-medium">클래스 관리</p>
                        </a>
                        <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                            <SvgIcon component={SettingsIcon} />
                            <p className="text-sm font-medium">설정</p>
                        </a>
                    </div>
                    <div className="flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 pt-4">
                        <div className="flex gap-3 p-3 items-center">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaQlB3gThnZXki3cXwB13gHAET-ZW-PPmSODwPpqTOY25OTBeKHfsgXnFI-J2ztF5OpEbQL2roZOQWjrYbFQqz-QW_91Le_fpOBW3M0Q-qMLmjRwGUjB_qj1ub3tRMugyDDCVXSvZ33d1_RVXf9j1fi2eyxxVsg2BxoQasI5CREppibWC_aHPsVfb-H9CUxCjwP-Zbee1axlC_9qeKc8j_vkBRF1KkHQW65MnBDTRfewl1kUYtV8WQo1-4twGWQcMV-Bx6fC5qFp0")',
                                }}
                            ></div>
                            <div className="flex flex-col">
                                <h1 className="text-slate-800 dark:text-white text-base font-medium leading-normal">
                                    김관장
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                    체육관 관리자
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                        >
                            <span className="material-symbols-outlined">logout</span>
                            <p className="text-sm font-medium">로그아웃</p>
                        </a>
                    </div>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
