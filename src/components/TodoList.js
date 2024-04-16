'use client'

import { useState } from "react"

export default function ToDoList(){

    const [items, setItems] = useState([])

    function addItem(e){
      
        if(e.key === 'Enter'){
            // console.log(e.target.value)
            let text = e.target.value;
            setItems(oldArray => [...oldArray, text]);

            e.target.value = "";
        }
    }



    return (
        <div className="flex flex-col">
            <input placeholder="Type here" class="mb-2 input input-bordered w-full max-w-xs m-auto" type="text" onKeyUp={(e) => addItem(e)}></input>
            {items.map((item, index) =>
                <div key={index} className="card">
                    <div className="inline-flex m-auto my-2">
                        <input className="checkbox mr-3" type="checkbox"></input>
                        <div>{item}</div>
                    </div>
                </div>
            )}
        </div>
    )

}