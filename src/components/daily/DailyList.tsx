import {useEffect, useState} from "react";
import api from "../../services/api";
import type {Member} from "../../types/member.ts";
import type {RawDailyAttendanceMember} from "../../types/attendance.ts";
import Belt from "../Belt.tsx";

const DailyList = () => {


    const[ dailyList, setDailyList ] = useState<Member[]>([]);


    useEffect(() => {
        api.get('/attendances/daily')
            .then(response => {
                console.log(response.data);
                const data: Member[] = response.data.map( (member: RawDailyAttendanceMember) => ({
                    id:member.memberInfo.id,
                    name: member.memberInfo.name,
                    belt: member.memberInfo.belt.belt.toLowerCase(),
                    grau: member.memberInfo.belt.grau,
                    time: member.time,
                }))
                setDailyList(data);
            });
    }, []);


    const renderMember = (member:Member, index:number) => {

        return (
            <li className="flex items-center gap-4 p-3 bg-white/5 rounded-lg" key={member.id.toString()+'-'+index.toString()}>
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
            {dailyList.map((member, index) => (
                renderMember(member,index)
            ))}
        </ul>
    )
}
export default DailyList;