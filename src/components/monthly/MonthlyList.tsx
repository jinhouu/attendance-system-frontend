import Belt from "../Belt.tsx";

function MonthlyList() {

    interface MonthlyUser {
        id: string;
        order: string;
        name: string;
        belt: string;
        grau: string;
        count: string;
        registerDate: string;
    }

    const userInfo: MonthlyUser[] = [
        {
            "id": "1",
            "order": "1",
            "name": "한진호",
            "belt": "blue",
            "grau": "1",
            "count": "22",
            registerDate: "2023-03-15",
        },
        {
            "id": "2",
            "order": "2",
            "name": "이다희",
            "belt": "white",
            "grau": "4",
            "count": "15",
            registerDate: "2023-03-15",
        },
    ];

    const renderMember = (member:MonthlyUser,index:number) => {
        return (
            <li className="flex items-center gap-4 p-3 bg-white/5 rounded-lg" key={index+member.id}>
                <span className="text-2xl font-bold text-primary w-6 text-center">{member.order}</span>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="text-white font-semibold">{member.name}</p>
                        <Belt belt={member.belt} grau={member.grau}/>
                    </div>
                    <p className="text-sm text-white/50">가입일: {member.registerDate}</p>
                </div>
                <span className="text-[#92adc9] font-medium text-right">{member.count}회</span>
            </li>
        )
    }

    return (
        <ul className="flex flex-col gap-3 min-h-0">
            {userInfo.map((member, index) => (
                renderMember(member,index)
            ))}
        </ul>
    )
}
export default MonthlyList