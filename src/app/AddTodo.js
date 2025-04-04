"use client"

import { useState } from "react"

export default function AddTodo({ onAddTodo }){ //prop on the left is a function created by parent component that has need as a parameter

    const [need, setNeed] = useState('');

    return(
        <div>
            <label>
                <input
                placeholder="Add your need"
                value={need}
                onChange={e => setNeed(e.target.value)}
                />
                <button onClick={() => {
                    setNeed(''); {/* reset input value into blank */}
                    onAddTodo(need); {/* props above that trigger a function from its parent */}
                }}>
                    Add
                </button>
            </label>
        </div>
    )
}