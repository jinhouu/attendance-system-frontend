import SvgIcon from "@mui/material/SvgIcon";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

function Header() {
    return (
        <header className="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 sm:px-10 py-3">
            <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-primary">
                    <SvgIcon component={SportsKabaddiIcon} />
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">Jiu-Jitsu Gym</h2>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide">
                <span className="truncate">10/26 10:24 AM</span>
            </button>
        </header>
    )
}

export default Header