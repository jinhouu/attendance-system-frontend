import {useState} from "react"

const Attendance = () => {

    const [num, setNum] = useState('')
    const [current, setCurrent] = useState('')

    const clickBtn = (i: number) => {
        if(i === 10) {
            setNum('')
            setCurrent('한진호')
        }else if(i === -1) {
            setNum(num.slice(0, -1))
        }else {
            setNum(num + String(i))
        }
    }

    const renderButton = (i: number) => {
        let btnClass:string;
        let cont:string;
        if(i === -1) {
            cont = "지우기";
            btnClass = "bg-red-500/20 hover:bg-red-500/30 text-red-400 text-lg";
        }else if (i === 10) {
            cont = "입력"
            btnClass = "bg-primary hover:bg-primary/90 text-white text-lg";
        }else {
            cont = String(i);
            btnClass = "bg-white/5 hover:bg-white/10 text-white text-3xl";
        }
        return (
            <button
                className={`flex items-center justify-center p-4 rounded-xl ${btnClass} font-bold transition-colors`}
                onClick={() => clickBtn(i)}>
                {cont}
            </button>
        )
    }

    const currentMember = () => {
        return (
            <p className={`text-green-400 text-base font-medium leading-normal text-center min-h-[24px] ${current ? 'animate-fade-hold-out' : 'opacity-0' }`}>{current}님, 환영합니다!</p>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-4 lg:col-span-2 xl:col-span-1 order-2 xl:order-2">
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black tracking-tighter">출석체크</h1>
                <p className="text-[#92adc9] text-base font-normal">회원 번호를 입력하세요</p>
            </div>
            {currentMember()}
            <label className="flex flex-col">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#324d67] bg-[#192633] h-16 placeholder:text-[#92adc9] p-4 text-3xl font-bold tracking-widest text-center" readOnly value={num}/>
            </label>
            <div className="grid grid-cols-3 gap-3 h-10/12">
                {renderButton(1)}
                {renderButton(2)}
                {renderButton(3)}
                {renderButton(4)}
                {renderButton(5)}
                {renderButton(6)}
                {renderButton(7)}
                {renderButton(8)}
                {renderButton(9)}
                {renderButton(-1)}
                {renderButton(0)}
                {renderButton(10)}
            </div>
        </div>
    )
}

export default Attendance