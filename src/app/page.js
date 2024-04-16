'use client'

import ToDoList from "@/components/TodoList"
import Counter from "@/components/Counter"

export default function Home() {

    return(
        <div>
            <h1 className="text-center"> WELCOME TO WEBSITE</h1>
            <div className="m-auto">
                <ToDoList />
            </div>
            <div className="flex flex-row justify-evenly">
            <Counter countBy={5} />
            <Counter countBy={2} />
            <Counter />
            </div>
        </div>
    )
}