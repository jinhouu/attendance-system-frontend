import { memo } from "react";
import './Belt.css';

function Belt({ belt, grau }: { belt: string; grau: number }) {
    return (
        <div className={`belt belt-${belt} flex flex-row-reverse w-20 h-3.5 rounded-sm overflow-hidden`}>
            <div className="preta flex flex-row-reverse gap-1 h-full pl-1 pr-1 mr-1.5 w-9">
                {Array.from({ length: Number(grau) }, (_, i) => (
                    <div key={i} className="grau w-1"></div>
                ))}
            </div>
        </div>
    );
}

export default memo(Belt);
