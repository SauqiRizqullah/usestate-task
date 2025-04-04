"use client"

import { useState } from "react"

export default function TaskList({
    todos,
    onChangeTodo
}){
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Task 
                        todo={todo}
                        onChange={onChangeTodo}
                        />

                    </li>
                ))}
            </ul>
        </div>
    )
}

function Task({ todo, onChange}){

    const [isEditing, setIsEditing] = useState(false)
    
    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <input 
                    value={todo.need}
                    onChange={e => {
                        onChange({
                            ...todo,
                            need: e.target.value
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
        
    } else {
        todoContent = (
            <>
                {todo.need}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }
    
    return(
        <div>
            <label>
                <input 
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    })
                }}
                />
                {todoContent}
                <button>
                    Delete
                </button>
            </label>
        </div>
    )

}