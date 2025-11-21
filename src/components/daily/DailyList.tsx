import Belt from "../Belt.tsx";

const DailyList = () => {

    interface User {
        id: string;
        name: string;
        belt: string;
        grau: string;
        time: string;
    }

    const userInfo: User[] = [
        {
            "id": "1",
            "name": "한진호",
            "belt": "blue",
            "grau": "1",
            "time": "18:05"
        },
        {
            "id": "2",
            "name": "이다희",
            "belt": "white",
            "grau": "4",
            "time": "18:05"
        },
    ];

    const renderMember = (member:User,index:number) => {

        return (
            <li className="flex items-center gap-4 p-3 bg-white/5 rounded-lg" key={index+member.id}>
                <div className="flex-1 p-1">
                    <p className="text-white font-semibold">{member.name}</p>
                    <Belt belt={member.belt} grau={member.grau} />
                </div>
                <span className="text-[#92adc9] font-medium">{member.time}</span>
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
export default DailyList;