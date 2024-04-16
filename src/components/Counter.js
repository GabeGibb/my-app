'use client'
import { useState, useEffect } from "react"

export default function Counter({countBy = 1}){
    const [num, setNum] = useState(0)

    useEffect(() => {
        document.title = 'kelly'
        // document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        document.title = `You clicked ${num} times`;
    }, [num]);

    return(
        <div className="">
            <div className="inline-flex">
                <button className="btn btn-primary btn-xs" onClick={() => setNum(num - countBy)}>-</button>
                <div>{num}</div>
                <button className="btn btn-secondary btn-xs" onClick={() => setNum(num + countBy)}>+</button>
            </div>
        </div>
    );
}